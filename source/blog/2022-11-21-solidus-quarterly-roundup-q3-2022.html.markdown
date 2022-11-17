---
title: "Solidus Quarterly Roundup: Q3 2022"
date: 2022-11-21
tags: roundup
author: Gabriel Sambarino
cover_image: /blog/shared/images/solidus-quarterly-roundup.png
description: Find out what happened in the Solidus ecosystem in Q3 2022!
---

Hello again, Solidus community!

This is Gabriel writing, Head of R&D at Nebulab in my spare time, and now contributing to Solidus! So excited to have joined the team and share what has been accomplished last quarter and what plans the future holds!

I am going to pick this up where  left it - no worries, Alessandro is not going anywhere, it’s just the team growing!


# What’s new


## Solidus 3.2 is out!

We promised. We delivered. Last quarter, [we said](https://solidus.io/blog/2022/07/12/solidus-quarterly-roundup-q2-2022) that 3.2 was going to be released VERY soon, and we did it.

The new version contains the changes we mentioned last quarter, in particular, a new event bus and the new starter frontend are here! \
But in case you missed it, here is a brief summary of what this release is bringing.


## New Event Bus

Before the Event Bus, there were just two options to extend Solidus: writing your own custom service classes or, in extreme cases, monkey patching.

The biggest issue they had in common was the tight coupling: for example, if some actions needed to happen when an order was placed, the calling code had to be aware of the context and be updated whenever changes to the flow had to be made.

That is where we implemented the first version of Solidus’ Event Bus. With time and real-World usage, and by carefully listening to your feedback, we noticed some changes were needed: above all, it was hard to test and debug.

And that’s why the new Event Bus is born: it brings better support for async subscribers, testability, observability, and many other features.

The new Event Bus has been developed as a separate gem, [omnes](https://github.com/nebulab/omnes), which implements the pub-sub pattern. Check out the README to learn how to start using it!

![Omnes](/blog/shared/images/omnes.png)

We also have an [upgrade guide](https://edgeguides.solidus.io/customization/subscribing-to-events#upgrading-from-the-legacy-event-system) from the legacy event system to Omnes.

Note: while the legacy event system is still supported, it'll be discontinued and removed in Solidus 4, so our recommendation is to start planning the migration.


## Starter Frontend

The new starter frontend is here to make our beloved users’ lives easier.

![Starter Frontend](/blog/shared/images/ssf.png)

On fresh Solidus installations, this modern and easy-to-extend codebase will provide a more efficient bootstrapping experience.

The biggest difference with the old frontend is that the new one does not come as a gem: it is in fact installed via a command that creates all the necessary files inside of the project instead.

This new approach has the primary benefit of not requiring Deface for customizations, thus making developers’ lives easier.

Plus, following the [Rails Doctrine](https://rubyonrails.org/doctrine), the new Starter Frontend is opinionated enough to streamline potentially tough decisions for you, while maintaining all the freedom that makes Solidus a great choice for any brand in need of total flexibility. In its current state, the new frontend should be considered just as a starting point, though. In fact, we plan a lot of changes to make it more in line with Rails developers’ expectations: the good news is that we can change it quite easily because it is no more a dependency hence no risk of breaking any backward compatibility. 

Finally, the [solidus_frontend](https://github.com/solidusio/solidus_frontend) gem has been deprecated in favor of the new storefront: if you are using it, you can still use it, at least in the short term, as this change will likely not impact you. \
Moving forward, though, we recommend moving all the gem code into your application and removing the dependency. We will soon release a guide with all the details on the process to follow.

There are also other important changes you should take a look at before upgrading and a plethora of fixes, minor changes, and updates. Find them all in the [CHANGELOG](https://github.com/solidusio/solidus/blob/master/CHANGELOG.md)!


## New Guides

We officially released the new guides we have been working on over the last year: you can now access them at [https://guides.solidus.io](https://guides.solidus.io)! Find the corresponding repository here: [https://github.com/solidusio/edgeguides](https://github.com/solidusio/edgeguides).

![New Guides](/blog/shared/images/guides.png)

As you can see, we used [Docusaurus](https://docusaurus.io/) as the engine powering the guides. It’s a React-based project that will help focus on writing good content while providing enough flexibility for customizing how the guides are accessed by the community.

In terms of content, we decided to adopt [Diátaxis](https://diataxis.fr/), a framework that will help us structure technical documentation based on the need of the people consuming it. Do you want to see it in action? Check out one of the first pages we converted using the framework: [State Machines](https://guides.solidus.io/advanced-solidus/state-machines/).

Please let us know what you think about them, and what you think can be improved! And contributions are very welcome as usual.

Oh, in case you still need the old guides, they have not been deleted but just moved to the [Legacy Guides site](https://legacy-guides.solidus.io/).


# Next up


## Make Payment Extensions compatible with the new Starter Frontend

Integrating payment extensions with the new Starter Frontend require some manual work; in our mission to improve the time to market of Solidus stores, we want to make payment extensions work out-of-the-box with the new Starter Frontend.


# That’s all, folks!

Thank you for reading until the very last paragraph, you have earned an even warmer spot in our hearts!

Before you go, let me remind you of joining our [Slack community](https://solidusio.slack.com) if you haven’t already, and leave there any comments, questions, and concerns (but also words of encouragement if you like what we are doing).

You will hear from us again around the end of the year; until then, stay safe and enjoy your journey with Solidus!



— Gabriel and the Solidus team
