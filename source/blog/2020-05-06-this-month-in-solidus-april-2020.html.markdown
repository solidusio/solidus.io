---
title: "This Month in Solidus: April 2020"
date: 2020-05-06
tags: Solidus
author: Alessandro Desantis
cover_image: /blog/shared/images/solidus-monthly-update.png
description: >
  Dive in and see everything that happened in the Solidus world in April 2020: tons of core
  improvements, new extensions, a virtual SolidusConf and much more!
---

Hello folks, and welcome to our first edition of This Month in Solidus!

As you may guess from the name, this is a monthly blog post we'll be publishing with news from the
entire Solidus ecosystem. The goal is to keep you in the loop about what's happening and make sure
you take advantage of all the latest opportunities Solidus and its community provide you.

Without further ado, here's what happened in the Solidus world in April 2020!

### Community

You have probably noticed we have started rolling out a complete revamp of our website. It's
important to note this isn't just a cosmetic change: we are completely restructuring our
communication and tone of voice to highlight Solidus' benefits and make the framework more
accessible to non-technical audiences:

* We started with our [home page](https://solidus.io), which was rebuilt from scratch in order to
  clearly communicate the advantages of Solidus for both developers and business stakeholders.
* We then created an [Integrations page](https://solidus.io/integrations), where you can clearly see
  which services Solidus integrates with, and how you can use such integrations to create value for
  your business.
* The real star, however, has been our [Roadmap page](https://solidus.io/roadmap). We have always
  been big on transparency in this community, so it just seemed right to publicly advertise our
  technical roadmap for 2020 — now, the entire community can see what we're up to and what our plans
  are for the rest of the year.

The new website is seeing a tremendous response among the community, and we're really thankful for
all the feedback and enthusiasm that you have shown so far! We still have much more to show you, so
be on the lookup for new pages! 👀

A big thank you to Davide Di Stefano, Michela Frecchiami and everyone else at Nebulab who's helped
with the new design and copy, and to everyone in the Solidus community who's helped us with reviews
and adjustments.

Finally, we've been working on a [demo site](http://demo.solidus.io/), where you can preview
the admin side of Solidus without having to spin up your own server. You're also able to take a
guided tour of some of our favorite features of the platform. It's still very much a work in
progress, but we invite you to take a look and let us know what you think. Shoutout to Sean Denny
from Nebulab for leading this!

### Core

We shipped some exciting improvements that had been anticipated in the
[Q1 roadmap update:](https://solidus.io/blog/2020/04/06/solidus-roadmap-update-q1-2020-edition.html)

* [**ActiveStorage support was merged.**](https://github.com/solidusio/solidus/pull/3501) Support
  for ActiveStorage was finalized and merged into the core. ActiveStorage will be the official
  default starting from Rails 6.1, which will introduce the ability to generate public URLs for
  attachments. Thanks to Elia Schito and Filippo Liverani from Nebulab for their work on this!
* [**Paranoia will be removed in Solidus 3.**](https://github.com/solidusio/solidus/pull/3488)
  Paranoia-style soft-deletion, where deleted records are completely removed from the default scope,
  is now considered a bad practice. We prepared a PR for Solidus 3 that will completely remove
  Paranoia from the core in favor of the more explicit and intentional [Discard](https://github.com/jhawthorn/discard)
  gem. Thanks to Dumitru Ceban from Nebulab!
* **We added support for international names.** Not all names are made by two words, and we want
  Solidus to be respectful and inclusive of these differences. With [these](https://github.com/solidusio/solidus/pull/3458)
  [three](https://github.com/solidusio/solidus/pull/3524) [PRs](https://github.com/solidusio/solidus/pull/3584),
  we added support for more complex names — all while maintaining full backwards compatibility.
  Thanks to Filippo Liverani from Nebulab for his dedication to this matter!

This month, core also saw a huge amount of issue/PR triaging and finalization work. We resumed work
on some old issues and PRs that had been forgotten, and made sure that those that are open are still
relevant. Thanks a lot to Jared Norman from Super Good Software, Edwin Cruz from MagmaLabs and all
the other contributors who helped us with the spring cleaning!

### Extensions

It's been an exciting month in the world of Solidus extensions, with a ton of progress done on our
roadmap goals:

* **Data importer:** our first stable release of [`solidus_importer`](https://github.com/nebulab/solidus_importer)
  is expected this week! You will be able to import users, products and orders, along with all
  related data such as taxons, variants, images, option types and so on. Our next focus will be the
  ability to _export_ data as well. Thanks to Mattia Roccoberton and Flavio Auciello from Nebulab!
* **Content management:** [`solidus_content`](https://github.com/nebulab/solidus_content) now
  integrates with Contentful, Prismic, static sources such as YAML and JSON and, of course, the old
  and beloved solidus_static_content extension. We are now working on the admin UI to make it easier
  to create content types and entries without any development work. Thanks to Elia Schito and Andrea
  Vassallo from Nebulab!
* **Segment integration:** we have started work on our new [`solidus_segment`](https://github.com/nebulab/solidus_segment)
  extension, which uses Solidus' brand new [event bus](https://solidus.io/blog/2020/03/23/solidus-events.html)
  to send order events and other analytics information to Segment. From Segment, it's easy to
  forward the data to your tools of choice — no development work required. Thanks to Alessio Rocco
  from Nebulab!
* **New storefront:** our new [`solidus_starter_frontend`](https://github.com/nebulab/solidus_starter_frontend)
  is almost ready for some action! With semantic structure, a fresh design and more sensible
  defaults, the new storefront sets the foundation for modern frontend support in Solidus. We are
  finalizing the checkout flow and still need to polish some rough edges, but we expect to have
  exciting news soon! Thanks to Dino Hamzić and Paolo Tatone from Nebulab for leading this
  initiative!
* **GraphQL API:** the [`solidus_graphql_api`](https://github.com/solidusio-contrib/solidus_graphql_api)
  team is also working on finalizing the checkout flow. Once that's out of the way, we'll focus our
  efforts on documenting all types and mutations properly, and making sure that hte documentation is
  easily accessible, just like for the REST API. Thanks to Christian Rimondi, Rainer Dema, Alessio
  Rocco and Samuel Martini from Nebulab for the hard work!
* **Affirm:** the new [`solidus_affirm_v2`](https://github.com/peterberkenbosch/solidus_affirm_v2)
  has been refactored and upgraded to use the new Transaction API from Affirm to be able to use
  lease-to-own (LTO) providers partnered with Affirm. This partnership is in selective beta at
  Affirm right now, when publicly available this extension will be able to connect with those
  partners out-of-the-box. Thanks to Peter Berkenbosch, whose work is sponsored by our
  [Open Collective fund](https://opencollective.com/solidus)!
* **Product kits:** the new [`solidus_kits`](https://gitlab.com/deseretbook/solidus_kits) is a
  complete rewrite of the beloved `solidus_product_assembly` and allows you to create product
  bundles/kits to simplify the shopping experience and increase AOV. We have completed the admin UI
  and are now in the final stages of testing. Thanks to the team at Deseret Book for open-sourcing
  this work!

Be on the lookout for initial releases of some of these extensions in May!

### 🎉 SolidusConf 2020 🎉

This year, we're proud to announce that SolidusConf 2020 will be a completely digital experience.
In fact, we're focusing on making this year's conference the most interactive and engaging
SolidusConf yet!

Dates and details are coming soon - stay tuned on the Solidus Slack, this blog and our mailing list
(in the footer) for more information!
