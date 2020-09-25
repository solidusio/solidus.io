---
title: "This Month in Solidus: Summer 2020"
date: 2020-09-25
tags: Solidus
author: Sean Denny & Alessandro Desantis
cover_image: /blog/shared/images/solidus-monthly-update.png
description: >
  Dive in and see everything that happened in the Solidus world in summer 2020: new data tracking
  architecture, PayPal Commerce Platform integration and SolidusConf!
---

Hello everyone, and welcome to This Month in Solidus — Summer 2020!

You may have noticed we've paused this series for a couple of months: with the summer, the
[conference](https://solidus.io/blog/2020/07/17/announcing-solidusconf-2020.html) and a lot of
people being on vacation in the last few weeks, we've been working steadily but a bit more slowly
than usual, and we thought it would best to wait until we had more exciting news to share. 

### Introducing the Solidus data tracking architecture

Up until very recently, if you wanted to integrate your Solidus store with a marketing or analytics
service, you only had two options: you could either roll your own implementation, or leverage an
enterprise-y, expensive tool such as Segment to streamline the integration.

For a long time, we've wanted to solve this problem by creating a data tracking toolset that would
act as an on-premise, simplified version of Segment. Today, we're excited to present Solidus's very
own [data tracking architecture](https://github.com/solidusio-contrib/solidus_tracking)!

Think of it as an on-premise, simplified version of Segment, providing everything you need to
forward your Solidus store's data to the right platforms.

There's actually much more to it, and we'll be diving into the extension and how to integrate it
in the next few days. Stay tuned on our blog!

### PayPal Commerce Platform is now available

Our [PayPal Commerce Platform](https://github.com/solidusio-contrib/solidus_paypal_commerce_platform),
integration is here! This is the new default payment method for Solidus, and adds some handy
features like instant checkout and easier onboarding.

PayPal Commerce Platform allows your customers to pay via credit card or with any of PayPals various 
payment options - such as PayPal Credit, Venmo, or just their PayPal balance. It also enables your
customers to check out directly from the cart page, using PayPal's streamlined checkout process in
concert with the powerful Solidus  checkout API, to get your customers to the finish line as quickly
and easily as possible.

For more information about the extension,
[check out the blog post we wrote to announce it.](https://solidus.io/blog/2020/09/02/solidus-paypal-commerce-platform.html)

### Core updates this summer

Here are some of the new features and enhancements introduced to the core this summer: 

- [We simplified the Order state machine and made it configurable.](https://github.com/solidusio/solidus/pull/3542)
  This removes a lot of possible transitions - and complexity - from the state machine, and makes it
  easier to customize. Thanks to Martin Meyerhoff for this improvement!
- [Creating an order from the admin user page will now prefill the users address on the order.](https://github.com/solidusio/solidus/pull/3558)
  This should save some time when creating new orders. Thanks to Jaime Loyola for this new feature!
- [We added bulk selection to admin tables.](https://github.com/solidusio/solidus/pull/3565)
  This is controlled by CSS classes, making it easy to drop this functionality in wherever you want.
  This new feature is thanks to Daniele Palombo!
- [We implemented an API endpoint for customer returns.](https://github.com/solidusio/solidus/pull/3579)
  Previously this didn't exist - now it does! 🎉 Thanks to Sean Denny (Hey, that's me!) for this new
  feature!
- [We added an admin UI for adding stock locations to shipping methods.](https://github.com/solidusio/solidus/pull/3624)
  This allows you to associate shipping methods to stock locations, ensuring that a shipping method
  will only be available on whatever stock locations you designate. Thanks to Demitru Ceban for this
  feature!
- [Validations will now run on order updates.](https://github.com/solidusio/solidus/pull/3645) You
  can disable this functionality with a config option, but it's desirable to ensure that everything is
  still valid for an order when it updates. Thanks to Alberto Vena and Martin Meyerhoff!
- [Variant properties can now be set to apply to all variants.](https://github.com/solidusio/solidus/pull/3653)
  Thanks to Filippo Liverani and Adam Dunkley for this new feature!
- [You can now configure whether or not billing addresses are required for orders.](https://github.com/solidusio/solidus/pull/3658)
  This is helpful for stores and payment methods that don't require a billing address. This new
  feature is thanks to Edwin Cruz!
- [We added an encrypted_string preference type.](https://github.com/solidusio/solidus/pull/3676)
  This allows you to safely store sensitive information in the database, rather than having to use
  ENV variables. Thanks to Stefano Sarioli for this new feature!

### Solidus 2.11 around the corner

Solidus 2.11 is on the way! Be on the lookout over the next couple of weeks. As a reminder, this is
the last release of Solidus before 3.0.

Solidus 3.0 will be release shortly after, and will only remove deprecated functionality. In other
words, if you're on Solidus 2.11 and see no deprecation warnings, you can safely update to Solidus 
3.0!

### SolidusConf is LIVE!

[SolidusConf 2020](http://conf.solidus.io/) is happening *RIGHT NOW!* We had a great lineup of
speakers and presenters for you, and today we're holding our hack day. The hack day is open to
everyone, so [click here](https://hopin.to/events/solidusconf-2020) for entry!

At 10AM central today, we'll also be holding an open stakeholders meeting. If you're curious how
the meetings are run, come in and say hello!
