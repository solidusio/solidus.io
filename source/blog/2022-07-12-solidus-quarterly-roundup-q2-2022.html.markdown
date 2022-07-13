---
title: "Solidus Quarterly Roundup: Q2 2022"
date: 2022-07-12
tags: roundup
author: Alessandro Desantis
cover_image: /blog/shared/images/solidus-quarterly-roundup.png
description: Find out what happened in the Solidus ecosystem in Q2 2022!
---

Hello, Solidus community—it’s been a while! 👋

This is Alessandro writing, with a recap of everything we’ve accomplished in the past quarter and a
sneak peek of what to expect in the next!

## Solidus 3.2 is around the corner!

First things first: a lot of you have been asking for a release date for Solidus 3.2 and, while we
don’t have a specific date in mind yet, I can tell you it will be available VERY soon.

At this point, we’re just ironing out the latest quirks, crossing our t's and dotting our i's, and
then we should be all set!

Bear a little more patience as we work to provide you this new release, which packs a ton of
improvements while being, as always, fully backwards compatible!

## What we did: Omnes, Starter FE, Rails 7 and Ruby 3.1

We took Q2 to finalize a few projects that had been long in the making: the next Solidus release
will bring a completely revamped event bus, a new starter FE, and Rails 7 and Ruby 3.1 support.

As always, you can consult the full list of
[Pull Requests](https://github.com/solidusio/solidus/pulls?q=is%3Apr+merged%3A2022-04-01..2022-06-30+is%3Aclosed)
for the nitty-gritty, or you can read the recap below for the highlights!

### Welcome Omnes, our new event bus!

Since its rollout in Solidus 2.9, we’ve been pushing the community to use the event bus to customize
Solidus whenever possible.

The event bus encourages orthogonal architectures where your customizations are independent of
Solidus’ domain model, leading to a cleaner and more maintainable codebase. We’ve been using it a
lot in our own Solidus apps, and it’s really improved the quality of our code.

Today, we’re excited to announce the next phase of our pub/sub architecture:
[Omnes](https://github.com/nebulab/omnes). Born out of the feedback that we have collected from the
community in the past two years, Omnes offers a cleaner, more intentional design, powerful
observability, built-in serialization and async processing and much more.

We have already ripped out the original Solidus event bus and[replaced it with Omnes](https://github.com/solidusio/solidus/pull/4342),
and we can’t wait to see what you’ll build with it! We’ll continue to improve Omnes and add new
events to the core—stay tuned!

### solidus\_frontend is dead, long live solidus\_starter\_frontend!

This is not really a surprise since it’s been in the works for quite some time, but we have finally
[deprecated solidus\_frontend](https://github.com/solidusio/solidus/pull/4320) in favor of the new
[solidus\_starter\_frontend](https://github.com/solidusio/solidus\_starter\_frontend).

This has been in the making for a long time, and it’s already been announced in
[its own blogpost](https://solidus.io/blog/2022/06/27/getting-started-with-solidus-starter-frontend.html):
the new storefront marks the beginning of a new era for Solidus. The days of Deface and HTML
selectors are gone forever: instead, you now have complete control over the frontend of your Solidus
application.

We’ll continue to work on solidus\_starter\_frontend, with the goal of making it the perfect starting
point for Rails engineers that just want the _omakase_ experience, but we will also work on
providing better support for SPA architectures—more on that next quarter!

### Rails 7 and Ruby 3.1 support

Not much to say here, but we’ve been hard at work to ensure Solidus is fully compatible with
[Rails 7](https://github.com/solidusio/solidus/pull/4220) and [Ruby 3.1](https://github.com/solidusio/solidus/pull/4366),
so that you can benefit from the latest features and security enhancements.

## What to expect: docs, service objects and extensions

Our focus for Q3 will be mostly on improving some first-class citizens of the Solidus ecosystem: our
developer documentation, our service object architecture and our official extensions.

### Developer guides: better, faster, stronger!

As most of you know, we’ve been working on [completely revamping](https://edgeguides.solidus.io) our
guides with the goal of providing a smoother, richer onboarding path to new Solidus users. The new
guides take a deep dive into all aspects of Solidus, allowing you to more easily implement advanced
customizations.

The guides are almost complete, which means the next few weeks will be about finalizing the content
and officially sunsetting the old documentation. We still have a couple of items on our bucket list
(e.g., being able to consult the docs for older Solidus versions), but we’re very close, so make
sure you don’t miss the announcement!

### How do you like them service objects?

If you’re in Slack, you know that we’ve been running a [survey](https://forms.gle/cPFkgt68kuo9fUWC6) 
in the community to collect feedback about our service layer.

While the event bus handles a lot of scenarios, some customizations just need to be done the
old-fashioned way, and we want to make sure Solidus makes that experience as pleasant as possible.
That’s why we want to understand how people use and customize the business logic in Solidus, and
what they’d like us to improve.

If you have been using Solidus for a while and have feedback to share, there’s still time to fill
the survey—we promise to keep you posted about the results and key takeaways!

### Extensions: love them AND hate them

We’ve been talking to a lot of Solidus developers in the past couple of months about extensions, and
the same feedback keeps coming up: extensions manage to be both incredibly useful and incredibly
annoying at the same time.

They’re useful because they provide a strong starting point to solve a lot of complex eCommerce
challenges, and they’re annoying because they’re not given the same attention that is dedicated to
the rest of the ecosystem. When they work, it’s all sunshine and roses; when they don’t, it can
quickly turn into a maintenance nightmare.

We heard you, and we’ve already designed a solution: one that will allow us to keep the good bits of
extensions and get rid of the annoying bits. Sounds too good to be true? Well, you’ll find out more
very soon!

## That’s it!

Thanks for sticking with us so far!

As always, you’re encouraged to subscribe to our newsletter and join our Slack community, so you
don’t miss any important announcements.

We’ll see you next quarter with another roundup, but we’ll have plenty of things to share with you
in between: smaller updates, new releases and updates from all corners of the _Soli-verse_.

For now, have an amazing rest of your week!

— Alessandro and the Solidus team ❤️
