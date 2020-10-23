---
title: "This Month in Solidus: September 2020"
date: 2020-10-27
tags: Solidus
author: Sean Denny
cover_image: /blog/shared/images/solidus-monthly-update.png
description: >
  Dive in and see everything that happened in the Solidus world in September 2020: Bug fixes, convenient changes, and information on our next Solidus Meetup. Also: Solidus 2.11 is live!
---

Hello everyone, and welcome to This Month in Solidus — September 2020! Let's dive in to what's new with the platform.

### Extension updates for September

- **NextJS Storefront:** There's a new Solidus storefront on the block - [`solidus_nextjs_frontend`](https://github.com/nebulab/solidus_nextjs_frontend)! We're using GraphQL and NextJS to bring you the snappiest frontend we can build. There's still some work to do, but keep an eye out on this project. We've completed the basic structure and GraphQL SDK, and we're working on the checkout now. Thanks to Andrea Vassallo, Rainer Dema, Dino Hamzić, and Alessio Rocco from Nebulab.
- **Data Importer**: Version 0.2.0 is officially out! With this release of [`solidus_importer`](https://github.com/solidusio-contrib/solidus_importer), the order importer has been fully hooked in. Now you'll be able to import orders from anywhere - using the [Shopify CSV](https://help.shopify.com/en/manual/products/import-export/using-csv) format. Thanks to Mattia Roccoberton, Flavio Auciello, and Elia Schito from Nebulab!
- **Data Feeds**: With the release of the data importer, we decided that we also needed a way to export data. This is what the [`solidus_feeds`](https://github.com/nebulab/solidus_feeds/) extension handles! It's still a work in progress, but it adds support for generating Google Merchant feeds, and publishing them to S3. We're releasing our first version soon, then we'll be adding more feeds and uploaders. Stay tuned for more info - and thanks to Elia Schito and Nicolò Rebughini from Nebulab.

### Core updates this September

Here's what happened in September:

- [Added a link to stock movements from the stocks page.](https://github.com/solidusio/solidus/pull/3779) Keeping track of your inventory is a challenge in any business, so to make things easier we've included a link on the stock page, where you can see the recent stock movements for any piece of inventory. Sean Denny - that's me! - is to blame for this change.
- [Made admin order event links translatable.](https://github.com/solidusio/solidus/pull/3772) The approve/cancel/resume buttons on admin orders are now able to be translated - thanks to Thomas von Deyen!
- [Made the email links on admin order index page consistent.](https://github.com/solidusio/solidus/pull/3767) Previously, these links would either go to the user page if it exists, or be a mailto link if the user did not exist. This was confusing, so Github user `brchristian` updated it so the email is not a link if the user does not exist, and also added a mailto icon next to every email address, so we can keep the mailto functionality. Thanks!
- [Fixed an address validation issue concerning states.](https://github.com/solidusio/solidus/pull/3763) There was a bug that happened with address validation where if you switched from a country that has states to one that does not, the address validation would fail because it was expecting the country without states to have a state. This PR fixes that issue - thanks to Dumitru Ceban for fixing this!
- [Fixed a bug where the default tax category was not being displayed on the product page.](https://github.com/solidusio/solidus/pull/3759) Even when a default tax category was picked, the product page still showed "none" as the selected option. This PR fixes that - thanks Valentín Sanjuan! Also, this was Valentíns first PR submission to Solidus. We're always happy to see new contributors!
- [Exposed a refresh() method for sortable tables in JS.](https://github.com/solidusio/solidus/pull/3754) This allows us to call `refresh()` on a sortable table on demand. Thanks to Github user `brunoao86` for this change - and for being another first-time contributor to Solidus. Welcome to the club!
- [Fixed incorrect resource error handling.](https://github.com/solidusio/solidus/pull/3728) On a nil resource, Solidus should throw a 404 error and redirect to the resource index page, however in some cases a 500 error was thrown directing to an error page. This PR fixes that issue. Thanks to first-time contributor Ikraam Ghoor for this change!
- [Removed custom CanCanCan action aliases.](https://github.com/solidusio/solidus/pull/3701) This removes and deprecates usages of CanCanCan custom action aliases, as they're not needed in newer versions of CanCanCan and can (can can) make upgrading to new versions harder. Thanks to Filippo Liverani for this change.
- [Removed an N+1 query on the shipment model.](https://github.com/solidusio/solidus/pull/3598) This simply adds `products` to an includes statement, which just so happens to drastically decrease the amount of DB queries needed. Thanks to first-time contributor Alban for this crucial change!

### Solidus 2.11 IS OUT NOW!

*BIG NEWS*! Solidus 2.11 is now out and ready to be used! This update will be the last until Solidus 3.0. It's important to note that the only change we'll be making in 3.0 is to remove all deprecated functionality - so be on the lookout for deprecation warnings in this release, as you'll need to fix those before updating to 3.0!

Stay tuned for more information about Solidus 3.0 - we're excited to be approaching our next major version release!

### Solidus Roadmap Survey

We're working hard on next year's roadmap, and part of that process is the yearly [**Solidus Roadmap Survey**](https://forms.gle/hD1S1YM78JmfZXhe6). The survey is your chance to let us know what direction you want Solidus to go in. Please feel free to share it with your colleagues and clients so they can also chime in with their thoughts. More responses means a more robust roadmap, so we want to get as many responses as possible!

### Solidus Meetup - October 30th

October's meetup is approaching fast! It will be held on October 30th at 10AM CT - [here's the sign-up link.](https://live.remo.co/e/solidus-meetup-2) We'll be talking about tips & tricks when it comes to contributing to Solidus, so swing by, say hi, and don't forget to get those last PRs you need done for HacktoberFest.
