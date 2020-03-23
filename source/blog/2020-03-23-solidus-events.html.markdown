---
title: "A Guide to Solidus Events: Everyone's Invited!"
date: 2020-03-23
tags: Solidus
author: Andrea Longhi
cover_image: /blog/2020/03/23/solidus-events/solidus-events_preview.jpg
canonical_link: https://nebulab.it/blog/solidus-events
---

_This post was originally posted on the [Nebulab](https://nebulab.it/) website
[here](https://nebulab.it/blog/solidus-events/)._

[Event programming][event_programming] (also known as the pub/sub pattern) has
been gaining lot of traction in recent times, not without reason. Events allow
to easily add custom behavior to a process that the developer may not own
directly or know in detail: you just need to subscribe to a known event and
then, when it happens, your code will run.

In the past, a few attempts were made to add an events system to
[Solidus][solidus], and finally events became a reality in version 2.9 after
this [PR][solidus_events_pr].

## Solidus events: the basics

How do events work in Solidus? They're actually rather simple, let's start the
Solidus sandbox console and get our hands dirty. First, we need to subscribe to
the event we're insterested in:

```ruby
  Spree::Event.subscribe 'foo' do |event|
    puts "Event with name '#{event.name}' just fired!"
  end
```

then, we can manually fire it:

```ruby
  Spree::Event.fire :foo
```

and the text `Event with name 'foo' just fired!` will appear on your screen...
that was easy 🍰

## Introducing event subscribers

Let's now consider a more ‘real life’ scenario. We want to deliver
[transactional emails][transactional_emails] to customers in a centralized way.

The first step is to patch the state machines of some Solidus models in order
to fire events when the shipment or order state changes. These two modules will
do the trick:

```ruby
  module OrderDecorator
    def self.prepended(base)
      base.state_machine do
        after_transition do |order, transition|
          Spree::Event.fire "order_#{transition.to_name}", order: order
        end
      end
    end

    Spree::Order.prepend(self)
  end

  module ShipmentDecorator
    def self.prepended(base)
      base.state_machine do
        after_transition do |shipment, transition|
          Spree::Event.fire "shipment_#{transition.to_name}", shipment: shipment
        end
      end
    end

    Spree::Shipment.prepend(self)
  end
```

Then, we add a subscriber module that will deliver mails when orders and
shipments change to the right state:

```ruby
  module TransactionalEmailsSubscriber
    include Spree::Event::Subscriber

    event_action :order_complete
    event_action :order_canceled
    event_action :shipment_shipped

    def order_complete(event)
      TransactionalMailer.notify_order(event.payload[:order])
    end

    def order_canceled(event)
      TransactionalMailer.notify_order(event.payload[:order])
    end

    def shipment_shipped(event)
      TransactionalMailer.notify_shipment(event.payload[:shipment])
    end

    subscribe!
  end
```

The module includes `Spree::Event::Subscriber`, which simplifies events
subscriptions by sparing you to write some tedious boilerplate.

You need to define which event you want to subscribe to with the `event_action`
macro and then define a corresponding method that will be called when the event
is triggered.

If the module is loaded late enough in the initialization process of the app,
then it can be subscribed to directly from within its definition (see last
line), otherwise it needs to be explicitly subscribed to, for example in an
initializer:

```ruby
  TransactionalEmailsSubscriber.subscribe!
```

The last and optional step, if you want to actually see the examples work, is
to define the fake `TransactionalMailer` class:

```ruby
  module TransactionalMailer
    extend self

    def notify_order(order)
      puts "Dear #{customer(order)}, your order #{order.number} is now #{order.state}."
    end

    def notify_shipment(shipment)
      order = shipment.order
      puts "Dear #{customer(order)}, shipment with tracking #{shipment.tracking} for order #{order.number} is now #{shipment.state}."
    end

    private

    def customer(order)
      order.bill_address.firstname
    end
  end
```

Everything is now in place, so you just need to complete, cancel or ship some
shipments. One quick way is to copy all the code above in the Solidus core
specs for the order or shipment model, run them and watch the text appear on
screen:

<img
  src="/blog/2020/03/23/solidus-events/tests.png"
  alt="Solidus shipments test run in console"
  />

## Subscribe to multiple events

Recently Solidus gained the ability to subscribe to multiple events by using
regular expressions. This is a feature made possible by the fact that
ActiveSupportNotifications supports regexps — though other event adapters, when
they will become available, may not offer this feature as well.

Using regular expressions may help, for example, when you want to subscribe
to all order's events, or during debugging. You can use this code if you want
to be notified each time an event is fired:

```ruby
  Spree::Event.subscribe /.*\.spree/ do |event|
    puts "#{event.name} => #{event.payload.inspect}"
  end
```

Please note that you need to explicitly include the `spree` namespace in the
regexp, or you will subscribe to all ActiveSupport notifications, including
the ones from Rails internals.


## How Solidus events work

Solidus events are based on [Rails][rails]'
[ActiveSupportNotifications][ASNotifications], but the actual event backend is
configurable, so new event adapters may be added by the core team in the future
(or you can create your own, of course).

ActiveSupportNotifications seemed to be the most reasonable choice for
implementing the default event adapter for the following reasons:

* it's default Rails
* it's battle tested since Rails 3.x
* it doesn't require any external events library
* it's widely used in Rails internals
* it's simple and easy to use

Solidus events are a relatively new feature, so they still need to become widely
used in the Solidus codebase, but developers can start using them anywhere for
their convenience by adding custom events and subscribing to them. And if you
think you found a good use case, then please consider sharing it with the
community by opening an issue or a PR in Solidus... thank you!


[transactional_emails]: https://en.wikipedia.org/wiki/Email_marketing#Transactional_emails
[solidus_2_9]: https://github.com/solidusio/solidus/tree/v2.9
[solidus]: https://solidus.io/
[ASNotifications]: https://api.rubyonrails.org/classes/ActiveSupport/Notifications.html
[rails]: https://rubyonrails.org/
[event_programming]: https://en.wikipedia.org/wiki/Event_(computing)
[solidus_events_pr]: https://github.com/solidusio/solidus/pull/3081
