---
title: "Solidus Roadmap Update: Q2 2020"
date: 2020-07-09
tags: Solidus
cover_image: /blog/shared/images/solidus-roadmap-update.png
description: Check out the progress we've made towards our roadmap in Q2 2020!
author: Alessandro Desantis
---

Hello again, Solidus community! Here we are, with our usual roadmap update — this time, it's the Q2
2020 edition. We have tons of exciting news for you, so buckle your seat belts!

### Now available: data importer, content and GraphQL!

Last Friday marked the initial releases of three *huge* projects that we've been working on for the
last months:

- [solidus_importer](https://github.com/nebulab/solidus_importer): if you've ever worked on
  importing large amounts of data into Solidus (e.g. for a replatform), you know how repetitive and
  error-prone the process can be. Our shiny new data importer, compatible with most major eCommerce
  platforms, should make that much easier! Did we mention it's fully extensible?
- [solidus_content](https://github.com/nebulab/solidus_content): Solidus finally has an _omakase_
  solution for content management. If you need to integrate with Contentful, Prismic, Alchemy or
  any other content management solution, you can use solidus_content to streamline the process and
  create a nice backend UI to manage content. Check it out!
- [solidus\_graphql\_api](https://github.com/solidusio-contrib/solidus_graphql_api): the GraphQL API
  marks the beginning of a new era of headless eCommerce for Solidus. It's now feature-complete and
  ready to see some production traffic. If you're starting a new headless architecture with Solidus,
  you should definitely give it a try — and don't forget to leave feedback!

### Back in business: Klarna and solidus_subscriptions

In addition to releasing the new extensions, we also worked hard to bring home and polish some
popular community-maintained extensions: 

- [solidus\_klarna\_payments](https://github.com/solidusio-contrib/solidus_klarna_payments):
  originally developed by [@josetonyp](https://github.com/josetonyp) and
  [@robinboening](https://github.com/robinboening), this extension adds support for
  [Klarna](https://www.klarna.com), a popular payment gateway in Europe. The authors were kind
  enough to let us move the code to solidusio-contrib, where the community gave it new life and made
  it compatible with the latest Solidus releases.
- [solidus_subscriptions](https://github.com/solidusio-contrib/solidus_subscriptions): originally
  developed by Stembolt for [Goby](https://goby.co), our subscriptions extension hadn't seen much
  love in a while. Things are much better now: the extension has been updated, tons of new features
  have been implemented and tons more are coming.

### To Q3 and beyond!

We have so much in store _(pun intended)_ for the next months.

In Q3, we will continue to iterate on the extensions we have released, based on community feedback
and any requirements and edgde cases that emerge from production usage.

However, we won't just rest on our laurels: the next quarter is also when we'll focus on our
omnichannel strategy, making it easier than ever to keep your Solidus catalog in sync with major
platforms such as Amazon, Facebook and Instagram.

We'll also continue working on extendability, improving Solidus' event-driven architecture, and on
enabling support for the latest frontend technologies through our Next.js starter kit.

Finally, we'll complete and publish our new [developer guides](https://edgeguides.solidus.io), which
will not only lower the barrier of entry for becoming a Solidus developer, but also shine a new
light on many of Solidus' lesser-known features and capabilities.

### As always: thank you! 🙇‍

We can't stress this enough: thank you, thank you, thank you. To everyone who's helped with their
contributions, both technical and financial, to everyone who's given us feedback and to everyone
who's shared their appreciation for the community's work. You drive us forward and bring out the
best in us.

Stay tuned for updates via [our blog](https://solidus.io/blog) and newsletter, and [reach out on
Slack](http://slack.solidus.io/) if you have any questions, want to help, or just feel the urge to
share some love!

Let's continue shaping the future of eCommerce — free, open-source and community-driven.
