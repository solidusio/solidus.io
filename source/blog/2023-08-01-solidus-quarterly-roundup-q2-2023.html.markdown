---
title: "Solidus Quarterly Roundup: Q2 2023"
date: 2023-08-01
tags: roundup
author: Gabriel Sambarino
cover_image: /blog/shared/images/solidus-quarterly-roundup.png
description: Quarterly News from the Solidus World
---

Summer is magic, Solidus community!

Greetings from Gabriel, Head of R&D at [Nebulab](http://www.nebulab.com), one of the primary maintainers of the Solidus Open Source project.

Today I want to recap the previous quarter with you all and let you see what is happening in the Solidus World.


# What’s new

## Solidus v4.1

This [minor release](https://solidus.io/blog/2023/06/29/solidus-v4-1) introduces some foundational pieces for the new Admin UI - AKA the backend, but we will now refer to it as Solidus Admin.

There are several minor improvements and fixes in a release that should be easy to upgrade to, assuming you are running Solidus 4.0. For the full changelog, go [here](https://github.com/solidusio/solidus/releases/tag/v4.1.0).

# In Progress

## Transparent admin/backend switch

We want to release the new admin UX/UI iteratively to get real-world feedback from our users, detect potential flows early, and provide as much value as possible with the new flows immediately.

To gradually release the new admin pages, we need a way to allow them to be immediately usable by people wanting to make the switch. Our strategy is to have the sidebar for both the admin and the backend identical, and the content of each page will be interchangeable based on whether that specific page is ready in the new admin or not. 

In Solidus 4.1, we released a new default theme for the admin. That was the first step toward this plan. With our work to align the sidebars, we can now switch seamlessly from one UI to another. 

## Product List

Work to drastically improve the Admin UX is underway, and the first piece we are releasing (early August) is the first version of the product list Admin page.

In addition to a more compelling UI and a renewed UX, new features will be included; we are about to release an early alpha, though it should be stable enough despite its alpha state, to give you all a chance to test the new Admin and let us know your thought.

Shorter feedback loops help build better products closer to users’ needs.

The alpha will contain a couple of exciting features, including:

* Bulk actions (we know you’ve been asking for them!)
* Live Search.

# Next Up - Q3 2023

The new admin experience required some upfront effort; now that the main components have been built, implementing the remaining sections will be easier and faster.

Below are a few ideas of which parts we may want to work on after the product listing.

## Products Management

To complete the initiative product listing, we want to revamp the product creation and editing process to accelerate the efficiency of the backend managers.

## Refund and returns

Making the return process more straightforward is a priority; the current workflow has not proven to be always efficient and may create some friction for high-volume stores.

# That’s all, folks!

Please join our [Slack community](https://solidusio.slack.com) if you haven’t already and leave there any comments, questions, and feedback.

We are also happy to chat about your experience with Solidus. If you like the idea, you can book a spot at the following link:  https://www.getclockwise.com/c/gabrielsambarino-nebulab-com/quick-meeting.

You will hear from us next quarter; take care, and have fun with Solidus!

* Gabriel and the Solidus team
