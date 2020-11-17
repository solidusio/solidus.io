---
title: "This Month in Solidus: October 2020"
date: 2020-11-17
tags: Solidus
author: Sean Denny
cover_image: /blog/shared/images/solidus-monthly-update.png
description: >
  Dive in and see everything that happened in the Solidus world in October 2020
---

Hello everyone, and welcome to This Month in Solidus — October 2020! Let's dive in to what's new with the platform.

### Extension updates for October

- [**Solidus Dev Support**](https://github.com/solidusio/solidus_dev_support) has seen quite a few updates for this month - there's now a boilerplate for extension configuration files, we've added configuration for `github_changelog_generator` (ensuring consistent changelogs across extensions), and made a few more minor changes and bugfixes.

- [**Solidus Content**](https://github.com/solidusio-contrib/solidus_content) now supports DatoCMS!

- [**Solidus Subscriptions**](https://github.com/solidusio-contrib/solidus_subscriptions) now integrates with Churn Buster, event emissions and tracking has been improved, and a tab has been added to the admin user view that displays existing subscriptions for any given user. Handy!

- [**Solidus PayPal Commerce Platform**](https://github.com/solidusio-contrib/solidus_paypal_commerce_platform) has had a few minor bugfixes, but more importantly you're now able to display PayPal's credit messaging to your users before checkout, which is shown to increase conversion rates and average order value. Version 0.2.1 is now live!

- [**Solidus PayPal Braintree**](https://github.com/solidusio/solidus_paypal_braintree) has also had PayPal's credit messaging added (when PayPal is being used and the checkout flow is set to `checkout`), in addition to a whole lot of minor improvements and an update to PayPal's new SDK (which allows the new PayPal credit options like Pay in 4 to be available). Version 1.0.0 is now live!

### Core updates this October

Here's what happened in October:

- [Updated permission set admin tab display.](https://github.com/solidusio/solidus/pull/3783) Previously, if a user had access to only a subset of the menu items under 'settings', it would prevent the 'settings' tab from showing up. This bugfix - by Elia Schito - fixes that issue!
- [Updated incorrect state generation for Italy.](https://github.com/solidusio/solidus/pull/3722) In any instance where a `Carmen::Subregion` existed for a country, we would use the subregion as the states for that country. However, in some instances, this is incorrect. In Italy's case, we need to be using the subregions subregions. There are more countries with this issue - but this PR provides the framework to fix those countries as they are identified. Sean Denny - that's me - is responsible for this fix!
- [Added a preference for phone number validation.](https://github.com/solidusio/solidus/pull/3685) Now you can indicate in your config preferences whether or not you'd like to validate phone number presence. This one was also mine!
- [Updates the install generator to correctly install extra extensions.](https://github.com/solidusio/solidus/pull/3777) There was an issue where, when you're installing extra extensions during Solidus installation (like [`solidus_auth_devise`](https://github.com/solidusio/solidus_auth_devise) or [`solidus_paypal_commerce_platform`](https://github.com/solidusio-contrib/solidus_paypal_commerce_platform)), the installation would fail. This fixes that bug. Another one from me - last one, I swear!
- [Fixed promotions that had no actions being considered active.](https://github.com/solidusio/solidus/pull/3749) Calling `active?` on a promotion with no actions will now return `false`. Thanks to Daniele Palombo for this update!
- [Refactored address state validation.](https://github.com/solidusio/solidus/pull/3129) State validation can now be performed by Solidus, or by a user provided class. Also provides a method to switch back to using the old state validation, if needed. Thanks, Dumitru Ceban!
- [The `rates_for_items` method now respects validity period for tax rates.](https://github.com/solidusio/solidus/pull/3768) The `rates_for_items` method in TaxHelpers did not check if the rate was active before applying it, leading to some incorrect tax calculations in some cases. Thanks Simon Kiener for this great bugfix, and for your first PR on Solidus!
- [Products now have a `discontinue_on` field.](https://github.com/solidusio/solidus/pull/3793) In the same way that `available_on` controls when the product starts being active, the `discontinue_on` field will control when the product _stops_ being active. Thanks Thomas von Deyen for this great new feature!
- [Updates internal mapping for event subscriber registration.](https://github.com/solidusio/solidus/pull/3758) The old method of mapping event subscriber registrations could cause issues with Zeitwerk on Rails 6, this change ensures that we won't have that problem! Thanks, Andrea Longhi!
- [Fixed a bug where disabling track inventory would disable all of the variants inventory fields.](https://github.com/solidusio/solidus/pull/3704) If there are multiple variants for a product, and you disable "track inventory" for only one of the variants, all of the variatns inventory fields would be disabled. This fixes that issue! Thanks, Felix Holmgren!


### Solidus 2.11 IS OUT!

This was in our last update, but we felt we should stress again: Solidus 2.11 is now out and ready to be used! This update will be the last until Solidus 3.0. It's important to note that the only change we'll be making in 3.0 is to remove all deprecated functionality - so be on the lookout for deprecation warnings in this release, as you'll need to fix those before updating to 3.0!

Stay tuned for more information about Solidus 3.0 - we're excited to be approaching our next major version release!

### Solidus Roadmap Survey

We're working hard on next year's roadmap, and part of that process is the yearly [**Solidus Roadmap Survey**](https://forms.gle/hD1S1YM78JmfZXhe6). The survey is your chance to let us know what direction you want Solidus to go in. Please feel free to share it with your colleagues and clients so they can also chime in with their thoughts. More responses means a more robust roadmap, so we want to get as many responses as possible!
