---
title: Solidus 2.4-2.5 Technical Rundown
date: 2018-01-15
tags: Solidus, roadmap, technical
author: Solidus Core Team
---


When we posted the [Solidus community roadmap](https://solidus.io/blog/2017/09/25/solidus-community-roadmap.html), we left technical conversations off the table. Now in this post, we'd like to focus on them. We'll discuss specific technical accomplishments and plans for Solidus 2.4 and 2.5 from a very technical perspective.

## Significant Improvements in 2.4

### Moving from RABL to JBuilder

Six years ago Radar [re-wrote the Spree API in RABL](spree/spree@355cdc7#diff-9f0d9a2bb8583aa294c0673e33329003). Since then, the ecosystem has evolved and Rails adopted JBuilder as the default JSON API format. While RABL was an excellent choice at the time, it was no longer widely used outside our community. [John Hawthorn](https://github.com/jhawthorn) has written a translation engine to [convert our RABL templates into JBuilder templates](https://github.com/solidusio/solidus/pull/2147), a long-standing request in the Solidus ecosystem. It is included in the current v2.4 Solidus release.

### Shipment Splitter Simplification

[Spree 2.0](https://github.com/spree/spree/releases/tag/v2.0.0) introduced an overhauled shipping system to allow multiple shipments. The intricacies involved in estimation and splitting of shipments created a very complex and hard-to-understand shipping API. The Spree 2.0 shipping system has been tweaked over the years, but remains largely unchanged.
Since that release, the community has built dozens of gems to extend that system. Our understanding of the requirements for modern stores has both evolved and become more refined. Because of this, we’ve pushed the Spree 2.0 behavior into an [extension](https://github.com/solidusio-contrib/solidus_legacy_stock_system). We will continue to support it, but recommend stores migrate to the [simpler, more customizable splitting system](https://github.com/solidusio/solidus/pull/2199) introduced in September.

### Switch to Headless Chrome for Specs

With the announcement that [PhantomJS has been deprecated](https://groups.google.com/forum/m/#!topic/phantomjs/9aI5d-LDuNE) in favor of Headless Chrome, the writing has been on the wall for our feature spec headless browser. John Hawthorn took it upon himself to [bump our webdriver to Headless Chrome](https://github.com/solidusio/solidus/pull/2211) for a more reliable and future proof testing solution. This should divorce the Solidus feature spec suite from any PhantomJS quirks, and provide a closer representation of each store’s usage. Based on our experience and findings, we recommend anyone using Solidus also consider the switch.

### Bump to Bootstrap 4.0 beta

When we decided on [Bootstrap for the admin](https://github.com/solidusio/solidus/pull/580), Bootstrap 3.x was the most recent official release, but the 4.0 alpha looked very promising and laid out a clear direction for the future of Bootstrap. To be as forward-compatible and store-friendly as possible, we decided to adapt the 4.0 alpha, and now in Solidus 2.4 have [bumped the admin Bootstrap version to 4.0 beta2](https://github.com/solidusio/solidus/pull/2310). The Solidus admin is now up-to-date and while some stores upgrading from Solidus 2.x may have minor issues, they should be easy to fix.

### Bug Closing Day

On Wednesday, October 4th, the Solidus core team members put aside a day to tackle the ever-growing number of open issues and unmerged PR’s in the Solidus project. Some issues were closed outright for staleness, but with some assistance from the community we were able to [merge 17 PRs](https://github.com/solidusio/solidus/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Aclosed%20merged%3A2017-10-04) to make a serious dent in the outstanding number.
The core team has an internal goal to speed up the feedback cycles on issues and pull requests to get them merged or closed quicker.

## Open Discussions for 2.5

### Removing Paperclip from Core

Since the earliest releases of Solidus, image uploading and display was handled by `has_attached_file` and [Paperclip](https://github.com/thoughtbot/paperclip). As web apps have evolved, our file and image management needs and options have as well.

Thoughtbot announced Paperclip is in a semi-official [state of non-maintenance](https://github.com/thoughtbot/paperclip/issues/2477#issuecomment-338265455) in October.

Tying Solidus to a single file upload library, and one that is very likely to be unmaintained in the near future, does not seem to be an ideal situation going forward. Forcing Solidus users to use any single file management system is restrictive. [Pulling Paperclip out of Solidus into an extension](https://github.com/solidusio/solidus/issues/2324) makes room for custom implementations, and also gets rid of the ImageMagick dependency for Solidus itself.

### Notification API

Solidus inherited Spree’s ActionMailer-based notification system, which sends transactional emails at certain points of the order lifecycle. In recent years, other notification channels and methodologies have become much more popular. ActionMailer has lost ground to email service providers that provide GUI-driven JSON-based templating, A/B testing, and analytics. Customers have started requesting SMS or other non-email notification delivery.
To better support the numerous ways our stores communicate with our clients and partners, we’re looking at revamping our internal API to be more flexible and robust for stores to configure its notification touchpoints.

[A joint pitch](https://github.com/solidusio/solidus/issues/2430) was made by [Sebastian](https://github.com/swcraig) and [Derrick](https://github.com/derrickp/) to extract our notification system into an extensible one and maintain our ActionMailer support as a gem that consumes this new interface.

After a couple of different directions that didn't work out, they hit on a [solution with an event bus architecture](https://github.com/solidusio/solidus/pull/2431). We’re incredibly excited to finally tackle and fix such a frequent headache for stores running Solidus.

## Continuing the Conversation

As with all our posts, anyone looking for more information about any of the topics mentioned above is welcome to [shoot us an email](contact@solidus.io) or start a conversation in the [Slack #solidus channel](http://slack.solidus.io). As a project, we value and heavily weigh the feedback we get from stores, developers, and agencies that reach out.
