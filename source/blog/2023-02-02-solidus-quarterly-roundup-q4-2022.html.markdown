---
title: "Solidus Quarterly Roundup: Q4 2022"
date: 2023-02-02
tags: roundup
author: Gabriel Sambarino
cover_image: /blog/shared/images/solidus-quarterly-roundup.png
description: Find out what happened in the Solidus ecosystem in Q4 2022!
---

Happy New Year, Solidus community!

Yes, I know it is almost February, but this is my first update for 2023, and I can tell you it will be an exciting year for our favorite Open Source eCommerce software!

This is Gabriel writing, Head of R&D at [Nebulab](www.nebulab.com), where we are helping Solidus evolve toward an even brighter future.

Now off with the introductions, and let’s get started!


# What’s new


## Solidus PayPal Commerce Platform 1.0

We promised, and we are delivering. The last time you heard from me, I mentioned we wanted to work on payment extensions, make the main ones officially supported, and make them compatible with the new Starter Storefront, which means that the extensions will work out of the box with Solidus.

Solidus PayPal Commerce Platform is just the first step of this process and just came out of beta. So feel free to add the gem to your project, test it, and let us know how it goes.


## Solidus 3.3 has been released

Honoring our quarterly release cadence for minors, here we are with 3.3.

A few minor but important features have been added; here is an incomplete list with the main ones.


### Configurable algorithm to prioritize store credits application

Before v3.3, store credits were always sorted by the priority of their type before being applied to an order during the checkout. Now you can change that behavior by configuring the `Spree::Config.store_credit_prioritizer_class` preference with your own class to define your preferred prioritization algorithm. Check out the [Pull Request](https://github.com/solidusio/solidus/pull/4677) that introduced this change for more details.


### Configurable promotion adjuster

Every time an order is updated, its eligible promotions might not be valid anymore; for example, this could happen if a promotion is tight to a specific order total threshold, and this value changes within the update. In the same way, changing the order could make it eligible for new promotions.

With Solidus 3.3, you can easily customize how this promotion adjustments recalculation works, by using the corresponding hook point. Please, check [this guide page ](https://guides.solidus.io/how-tos/how-to-use-a-custom-promotion-adjuster)for more information.


### Support for the new Colorado delivery fee

With the introduction of the new Colorado Delivery Fee in the United States, we had to change the taxation system to support this new requirement. We created a specif how to on our guides to describe how to setup your store to support this tax. Please take a look at [how to setup the Colorado Delivery Fee](https://guides.solidus.io/how-tos/how-to-setup-colorado-delivery-fee). 


### Support removed for after-EOL Ruby and Rails versions

We asked ourselves: if a dependency version is not supported anymore, why should we support it? Keeping support for older versions in our packages forces us into an awkward state where a quest for backward compatibility causes encumberment in our progress to add new features and reduce technical debt.

Thus, ancient and currently unsupported Ruby and Rails versions are not supported by the latest versions of Solidus anymore.


### Other changes

Tons of fixes and improvements (especially on the installer). Check out the [Changelog](https://github.com/solidusio/solidus/blob/v3.3/CHANGELOG.md) for the full list of changes.

### Upgrading

You can find detailed instructions on how to upgrade your Solidus instance to 3.3 in our [Release Notes](https://guides.solidus.io/upgrading-solidus/v3.3).


# Next up

We are currently targeting the next release as the last of the 3.x series. This means that, if we stick to this plan, after we release 3.4 we will also immediately release 4.0, The new major will be identical to 3.4 but with some planned breaking changes and the removal of all the deprecated code, to provide a smooth upgrade path for our beloved users.


## Make Payment Extensions compatible with the new Starter Frontend

Integrating payment extensions with the new Starter Frontend requires manual work; in our mission to improve the time to market of Solidus stores, we want to make payment extensions work out-of-the-box with the new Starter Frontend.


# That’s all, folks!

## Make your voice be heard

Are you considering using Solidus? Did you consider it but chose otherwise? Are you a Solidus user?
In any case, we would be delighted if you like to reach out and talk about your experience and thoughts on Solidus; please feel free to schedule a chat with me using [this link](https://www.getclockwise.com/c/gabrielsambarino-nebulab-com/quick-meeting).

## Join our community

Before you go, let me remind you to join our [Slack community](https://solidusio.slack.com) if you haven’t already and leave there any comments, questions, and concerns (but also words of encouragement if you like what we are doing).

You will hear from us next quarter; meanwhile, Happy Solidus Year to all of you!



* Gabriel and the Solidus team
