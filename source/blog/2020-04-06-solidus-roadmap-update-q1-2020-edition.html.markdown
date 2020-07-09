---
title: "Solidus Roadmap Update: Q1 2020 Edition"
date: 2020-04-06
tags: Solidus
cover_image: /blog/shared/images/solidus-monthly-update.png
description: Check out latest updates on the Solidus Roadmap progress. GraphQL API, Shopify importer, Headless content management and much more.
author: Alessandro Desantis
---

As we close the first quarter of the year, we wanted to take some time to share the progress we have
done on our roadmap so far and where we’re headed next.

## Content management

With the rise of content-first eCommerce and so many brands relying on quality content for fostering
a sense of community and brand ownership, we set to work to implement a solution that was flexible
and powerful at the same time.

The result of this work is [solidus_content](https://github.com/nebulab/solidus_content/), the
definitive content management solution for Solidus stores. With its pluggable architecture,
solidus_content allows you to integrate with solidus_static_content, if your use case is simple, or
with more complete solutions such as headless CMSs.

With solidus_content, you can give your content team all the tools they need to create fully dynamic
and nested layouts, creating new opportunities for your brand and dramatically reducing the cost and
time of getting new content up on your website.

## Shopify-compatible importer

Data migration is usually among the largest challenges of an eCommerce replatform project,
especially for stores that have been up and running for some time. Incompatible data structures,
corrupted data, esoteric plugins all make migrating data reliably a huge effort. So far, Solidus
hasn’t had an API in place for simplifying this process.

Our team has been hard at work on [solidus_importer](https://github.com/nebulab/solidus_importer/),
a gem that makes it easier to import data into your Solidus store, either as a one-off task or on a
recurring basis.

solidus_importer is fully compatible with Shopify’s export format because it’s the most widespread.
If your store is on a different platform, there are tools that will convert your data export into
Shopify’s format so that you can use it with the importer.

Did we mention the gem will also support exporting your data, and provide a pluggable architecture
that allows Solidus extensions to define their own import/export logic?

## GraphQL API

The Solidus REST API has served us well for the last five years, allowing us not only to build our
backend, but also countless SPA frontends. However, with the advent of GraphQL and its advantages
over traditional REST architectures, we knew it was time for a new kid on the block.

[Our new GraphQL API](https://github.com/solidusio-contrib/solidus_graphql_api/), while still in
active development, is coming along nicely and will eventually supersede the REST API in all
contexts. It’s already possible to browse a store via GraphQL, and we are currently working on a
GraphQL checkout in order to have a usable MVP ready within the next few weeks.

Our goal is to make it a joy to develop modern frontends backed by Solidus. Which brings us to the
next point…

## New storefront

React and Vue are great frameworks for complex applications, but not every store needs to be a
single page application. In fact, many stores on Solidus are still being developed as traditional
Web apps, with JavaScript in place only to augment and improve the most complex interactions.

For those developers who choose not to use a JavaScript framework, we want to provide a good
out-of-the-box storefront experience that is built following modern frontend development standards,
semantic and easier to customize.

The result of this work is [the new Solidus starter frontend](https://github.com/nebulab/solidus_starter_frontend/),
which will be the foundation for all future frontend work, including our upcoming React and Vue
toolkits.

## Core improvements

A ton of work has also gone into the core in order to make Solidus easier to adopt, customize and
scale:

* [**Paranoia is being deprecated in favor of Discard.**](https://github.com/solidusio/solidus/pull/3488)
  Discard provides a better and more linear developer experience, reducing the likelihood of weird
  bugs and edge cases with soft-deleted records. Paranoia will be completely abandoned in the next
  major release.
* [**Paperclip is being retired in favor of ActiveStorage.**](https://github.com/solidusio/solidus/pull/3501)
  ActiveStorage is the _omakase,_ future-proof solution for file storage. Due to limitations in the
  gem, ActiveStorage will not actually be usable with Solidus until Rails 6.1, but we’ll already
  have support for it by the time it’s released!
* **We’re making [addresses](https://github.com/solidusio/solidus/pull/3465)
  [more](https://github.com/solidusio/solidus/pull/3458)
  [flexible](https://github.com/solidusio/solidus/pull/3524).** This comprises several improvements
  to addresses, including a small but important change in how names are stored and more customizable
  validation rules. These improvements allow better support for international addresses.
* **We’re introducing support for [Apple Pay, Google Pay](https://github.com/solidusio/solidus_stripe/pull/25)
  and [SCA](https://github.com/solidusio/solidus_stripe/pull/20).** Yep, you read that right, three
  in one! solidus_stripe now supports paying via Apple Pay and Google Pay, as well cards that
  require SCA (Strong Customer Authentication). This makes the platform allows stores to continue
  serving customers in Europe, where SCA will be mandatory by the end of 2020.

## What’s next

While we are close to having a stable release for most of these projects, there’s still a lot of
work we need to do in order to finalize the implementations, document them properly and make sure
the community has all the resources they need in order to use the new features.

Having high quality standards means moving a bit more slowly, but also shipping work that
consistently delights our users. In Q2, we will continue to work on these initiatives to get them to
you as soon as possible.

As past initiatives are finalized and released, we will make room for new exciting projects, so be
on the lookout for more blog posts like this one!

## We couldn’t do this without you

Finally, the biggest thank you goes to everyone who’s helped and helps make this project a reality
through their dedication and work: the core team, the contributors, the stakeholders and each and
every single person in the community is absolutely instrumental in the success of Solidus, and we
couldn’t be prouder of being on this journey with you.

If you want to help, you can [ping us on Slack](http://slack.solidus.io/), leave some feedback and
suggestions on the many PRs we are opening across all our repositories, or
[support us financially through OpenCollective!](https://opencollective.com/solidus)

Together, we are shaping the future of eCommerce and, as always, that future is free and
open-source.
