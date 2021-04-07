---
title: "This Month in Solidus: March 2021"
date: 2021-04-02
tags: Solidus
author: Alessandro Desantis
cover_image: /blog/shared/images/solidus-monthly-update.png
description: >
  Dive in and see everything that happened in the Solidus world in March 2021!
---

Hey there, and welcome to your usual This Month in Solidus! Let's dive in and see everything that
happened in the Solidus world this March.

### (Yet Another) Full-Time Maintainer 👷‍♂️

Last month, we announced that Marc Busqué had joined the Nebulab team as a full-time Solidus
maintainer. We were pretty excited about the experience Marc brought to the table, being a
contributor to the popular [dry-rb](https://dry-rb.org) framework and maintaining OSS projects
of his own. In fact, Marc has already started tackling some pretty huge architectural challenges,
with the goal of making Solidus easier to extend, customize and maintain.

This month, we're doubling the excitement, because [Connor Ferguson](https://github.com/cpfergus1)
just joined Marc as our second full-time Solidus maintainer. Connor will help Marc with day-to-day
maintenance tasks as well as more future-looking initiatives, and he has already started
contributing  to finalizing the Solidus 3.0 release.

Which brings us to the next point...

### Solidus 3.0.0.rc2 Is Ready for Testing! 🛠

We released Solidus 3.0.0.rc2 on March 10. This is a release candidate, meaning that it's stable
and extremely close to what the final release will look like.

We need feedback from the entire community on the upgrade path from 2.x to 3.x, so we encourage you
to try the upgrade on your  stores and leave any feedback in [Slack](http://slack.solidus.io) or on
[GitHub Discussions](https://github.com/solidusio/solidus/discussions).

Just a little reminder: Solidus 3.0 does NOT include any new functionality, but rather it removes
all of the deprecations that were introduced during the 2.x releases, so that we can clean up the
codebase and start form a clean slate.

With that said, our goal is to build an ever more stable and extensible Solidus, and we do have tons
of stuff on the roadmap for the 3.x series. We can't wait to share it with you!

### Subscriptions 1.0.0.rc1 ♻️

We do like our release candidates, so much so that we also released
[solidus_subscriptions](https://github.com/solidusio-contrib/solidus_subscriptions) 1.0.0.rc1 this
month. It would be hard to overstate how much work went into this particular release: our goal was
to build *the* ultimate solution for managing a subscriptions-based eCommerce business, and we feel
like this release candidate is a giant leap in that direction.

The extension as a whole is now more powerful, more flexible, more performant and easier to
understand at the same time. Here's a non-comprehensive list of features and improvements:

- We've added built-in support for the most common subscription use cases and scenarios, such as the 
  ability to cancel failed installments when a new one is generated.
- We've implemented a brand new admin UI that allows you to manage all aspects of a subscription.
- We've added support for subscription events, to make it easy to run analytics and provide customer
  support. These also integrate with the Solidus event bus natively.
- We have parallelized subscription processing, which is now more resilient and allows you to take
  full advantage of your background processing library of choice!
- We have rewritten pretty much the entire codebase from scratch, to focus on simplicity and 
  linearity. We want the codebase to be easy for everyone to understand and extend.

And there's much, much more to it! Just take a look at the [closed PRs](https://github.com/solidusio-contrib/solidus_subscriptions/issues?q=is%3Aissue+is%3Aclosed)
and you'll get a sense of the amount of improvements in this release candidate. If you're already
using solidus_subscriptions, now is the time to consider upgrading to benefit from all the goodies!

With that said, there's much more that we want to do, so make sure you don't miss any of our
updates, and join [Slack](http://slack.solidus.io) and [GitHub Discussions](https://github.com/solidusio/solidus/discussions)
to become a part of the conversation.

_<p style="text-align: right">Once more, that's it. See you around! 👋️</p>_
