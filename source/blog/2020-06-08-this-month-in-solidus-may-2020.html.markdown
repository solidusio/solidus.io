---
title: "This Month in Solidus: May 2020"
date: 2020-06-08
tags: Solidus
author: Alessandro Desantis
cover_image: /blog/2020/06/08/this-month-in-solidus-may-2020/solidus-monthly-update-2020.png
description: >
  Dive in and see everything that happened in the Solidus world in May 2020: a new release on its
  way, backend improvements and our very first Community Day!
---

Hello everyone, and welcome to the second edition of This Month in Solidus, May 2020 edition!

Tons of exciting news this month: we have a new member in the core team, 2.11 is on its way with
tons of improvements, and we're hosting our very first Community Day.

### Jared Norman joins the core team

[Jared](https://github.com/jarednorman) is the owner of Super Good Software, long-time friends of
the Solidus community and among the largest technical and financial contributors to the platform.
Jared has been doing an amazing work in the last few weeks by helping us triage issues and PRs.

It only seemed natural to make things official by inviting him to join the core team, where he'll be
able to continue supporting the Solidus core and extensions ecosystem.

Welcome, Jared! 👋

### Solidus 2.11 is on its way!

You may have noticed the core team is busy working on the [2.11 release](https://github.com/solidusio/solidus/milestone/20).
This is a special release for a couple of reasons: first of all, it comes with tons of performance
enhancements, feature improvements and bug fixes across the board.

Bust most importantly, *this is the last release in the 2.x branch! 🎊* Yep, you read that right!
2.11 paves the way for the much anticipated 3.0 release.

Now, if you know anything about Solidus, you know how much we care about backwards compatibility and
not breaking your apps. This is why we plan to introduce any new features and enhancements in 2.11,
whereas 3.0 will simply remove all deprecated APIs from the code.

The idea is that, if you're on 2.11 and not seeing any deprecation warnings, you can safely update
to Solidus 3.0 and everything will keep working!

### Core updates in May

Here are some of the new features and enhancements introduced in May: 

- [**Restrict shipping methods to stock locations.**](https://github.com/solidusio/solidus/pull/3624)
  It is now possible to restrict shipping methods to select stock locations rather than displaying
  them for all stock locations. Thanks to Dumitru Ceban for Nebulab for uncovering this hidden gem
  in the code and creating a UI to allow anyone to use it!
- [**Pagination in the stock locations UI.**](https://github.com/solidusio/solidus/pull/3600) The
  Stock Locations page in the backend was missing a pagination UI, which was causing issues for
  stores with a high number of stock locations. Thanks to Edwin Cruz from MagmaLabs for taking care
  of the problem!
- [**Configurable guest token cookie options.**](https://github.com/solidusio/solidus/pull/3621) If
  you need to configure the parameters of the guest token cookie, you can now do it via a handy
  Solidus preference. This is very useful if you need to change the domain of the cookie, for
  example. Thanks to Thomas von Deyen for the new feature!
- [**Order validation during updates.**](https://github.com/solidusio/solidus/pull/3645) We know how
  important data integrity is to you. With this change, the order is re-validated every time the
  order updater is run, to make sure you're not inadvertently saving bad data. Thanks to Alberto
  Vena from Nebulab for restoring and finalizing this PR!
- [**"Only Active" filter in promotions UI.**](https://github.com/solidusio/solidus/pull/3595) You
  can now filter promotions by their state, and only get the ones that are currently active. This is
  extremely useful for stores that use promotions heavily — sorting through the list should be much
  easier now. Thanks to @wildbillcat for the feature!

You can expect to see these and many more in 2.11!

### Introducing Solidus Community Day!

In order to bring the amazing Solidus community together more often, we're setting up a Solidus
Community Day on June 12th, where you'll be able to talk about the current state of Solidus, the
future of the platform, as well as meet and network with eCommerce industry experts. We'll also have
speaker sessions where you'll be able to hear from Solidus experts about any number of topics.

This month, we've got Solidus expert Peter Berkenbosch. Peter is an open-source and eCommerce
veteran who's been working with Spree and Solidus for over a decade. He's specialized in bridging
product, leadership and development to create high-quality eCommerce stacks. He's a CXOps
enthusiast and is passionate about building technology teams and empower them to be their best.

Peter is going to talk about solidus_dev_support and how it supports developers in creating Solidus
extensions. He'll be generating an extension from scratch and highlighting the features that come
out of the box with solidus_dev_support.

We want to make this a monthly event, so we hope you'll join us in making this Solidus Community Day
a success. [You can sign up here](https://live.remo.co/e/solidus-community-day-1). See you there!
