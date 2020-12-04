---
title: "This Month in Solidus: November 2020"
date: 2020-12-07
tags: Solidus
author: Sean Denny
cover_image: /blog/shared/images/solidus-monthly-update.png
description: >
  Dive in and see everything that happened in the Solidus world in November 2020
---

Hey there, and welcome to This Month in Solidus: November 2020! The year is (finally) coming to a close soon, and the time has come to look back at some of the updates we've made in the last month. Let's dive in.

### Extension updates for November

- [**Solidus Dev Support**](https://github.com/solidusio/solidus_dev_support) continues to see a number of improvements thanks to the effort of Elia Schito. Mostly, the changes revolve around setting sensible defaults for new applications - try it out the next time you need to create a Solidus extension!

- [**Solidus Shipstation**](https://github.com/solidusio-contrib/solidus_shipstation) has seen a few small changes - most notably, there's now an option to export cancelled shipments to Shipstation, and a bug was fixed that was affecting tracking numbers on cartons.

- [**Solidus Tracking**](https://github.com/solidusio-contrib/solidus_tracking) saw an update that allows you to selectively disable automatic tracking of certain events.

- [**Solidus Importer**](https://github.com/solidusio-contrib/solidus_importer) now has some QOL improvements that prevent duplicate records or failing commands in certain situations.

- [**Solidus Subscriptions**](https://github.com/solidusio-contrib/solidus_subscriptions) had a number of updates. A bug on admin form submission was fixed, a config option was provided to allow you to specify whether you want to retry failed payments on the next billing cycle, and a handful of smaller bug fixes were bundled in as well.

### Core updates this November

This month, you might have noticed that not much in the way of new features was added to Solidus. That's intended! We're preparing for the release of Solidus 3.0, and most of the work involves removing deprecated code and small bugfixes. Here are some of the more tangible changes that happened in November:

- [Solidus now requires only the modules it specifically needs from Rails.](https://github.com/solidusio/solidus/pull/3478) Previously, Solidus required `rails/all`, but didn't _use_ all of what it required. This updates that, and ensures that we're only requiring the necessary modules - which should be a boost to speed and memory usage! Thanks to Elia Schito for this update.

- [Fixed variant-to-variant image assignment.](https://github.com/solidusio/solidus/pull/3810) This fixes a bug where a variants image could not be assigned to another variant. Thanks, Felix Holmgren!

- [Fixed a payment refund bug.](https://github.com/solidusio/solidus/pull/3831) A bug was introduced previously where if a payment refund failed, any subsequent attempt to refund the payment would also fail. Alberto Vena introduced a fix with this PR. 

- [Fixed a permission set issue that allowed regular users to see tabs on admin.](https://github.com/solidusio/solidus/pull/3840) When choosing what tabs to display on admin, some tabs checked for `show` ability instead of `admin` - which allowed some tabs like "Zones" to display to anyone with the ability to see "Zones" - including regular users. This only affected tab visibility and not the admin pages themselves, but still - big thanks to Alberto Vena for pointing this out and providing a fix!

### Solidus Governance

With [This PR](https://github.com/solidusio/solidus/pull/3836), Alberto Vena released the new version of the governance model (written by Alessandro Desantis). This document goes into detail about how Solidus is run - and what you can do to help the project, or even join the Stakeholders group. If you're interested in seeing the inner workings of a large, community-managed open source project, take a look!

### Solidus Meetups for 2020 conclude

We started this off as "Community Day" for Solidus - an hour-long event where we could get the community together, share our ideas, and hear about the cool stuff happening in the world of Solidus. We liked it so much, we decided to keep it going on a monthly basis! One of the greatest things about Solidus is the community that surrounds it, and it's been an awesome experience being able to see old friends, meet new faces, and hear from talented people at these events. I'm looking forward to putting more together for 2021 - stay tuned!

Be sure to check out our [youtube channel](https://www.youtube.com/channel/UCiFcxyt11T6QIIDPk2w0Jjw) for some our previous meetup and conference presentations. And make sure to subscribe if you want notifications on new videos!

### Solidus Roadmap Survey

Here's your last chance to help Solidus grow! We're working hard on next year's roadmap, and part of that process is the yearly [**Solidus Roadmap Survey**](https://forms.gle/hD1S1YM78JmfZXhe6). The survey is your chance to let us know what direction you want Solidus to go in. Please feel free to share it with your colleagues and clients so they can also chime in with their thoughts. More responses means a more robust roadmap, so we want to get as many responses as possible!
