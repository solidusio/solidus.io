---
title: "Solidus Quarterly Roundup: Q1 2023"
date: 2023-05-14
tags: roundup
author: Gabriel Sambarino
cover_image: /blog/shared/images/solidus-quarterly-roundup.png
description: Quarterly News from the Solidus World
---

Spring is here, Solidus community!

As usual, this is Gabriel writing, Head of R&D at [Nebulab](http://www.nebulab.com), where we work hard to improve Solidus and take it to the next step.

The last time you heard from me, I told you it would be an exciting year for our favorite Open Source eCommerce software; and I meant it: I am so excited to share what we have been doing so far and our plans!


# What’s new


# Solidus v4.0 (and v3.4) out!

Since [we have released v3.4](https://solidus.io/blog/2023/04/21/solidus-v3-4) as the last minor of the v3.x series, we also [released Solidus v4.0](https://solidus.io/blog/2023/05/08/solidus-v4-0), which removes all the deprecations introduced with v3.x. For your convenience, we remind you that in Solidus’ release policy, the next major version of the software contains precisely the same features as the latest minor in the previous major.

With this major release, the new Starter Frontend - the official Frontend for Solidus - becomes the default, while the old frontend is no longer an option in the installer. 

To ensure a seamless installation, we have reworked the primary payment methods to make them work out of the box with the new frontend.

Yet another step toward a smoother onboarding, with much more to come!

This is what the installer looks like now when it comes to payment methods:


![alt_text](2023-05-24-solidus-quarterly-roundup-q1-2023/payment-options-installer.png "image_tooltip")



## Stripe

Solidus v4.0 is also the first release to support the new version of the [solidus_stripe](https://github.com/solidusio/solidus_stripe) extension, completely rewritten to work out-of-the-box with the Starter Frontend.

Why have we rewritten the gem instead of refactoring the existing one? Some reasons are:



* Good at one thing: The extension is now designed to support Stripe Elements flows only, following the standards suggested by the Stripe documentation.
* It uses and supports Stripe Webhooks for more reliable payment management.
* We have fixed our architectural problems until v4, which would generate an extra void payment. The payments will now reflect exactly what happens in Stripe and what operators expect to see in the Solidus panel.


## Braintree

This payment extension is now fully compatible and integrated with the Starter Frontend.

With Braintree, Solidus offers three top payment methods for adoption and utilization.


# Next up

## A new Brand!

You will see it soon enough on the Website: there is a new logo for Solidus, with new colors and a new theme! It will be more Ruby-on-Rail-ish, and one of the first areas to be impacted by the rebranding will be the...

## Admin Panel

By listening to your feedback, identifying the backend as one of the main areas of improvement wasn’t hard.

We do not only care for developers: operators are high on our priority list, too, so we are working hard to refresh the UI and the UX of the Solidus Admin, FKA the backend. The name is the first thing to change, but it won’t be the last.

Not only will we improve the User Experience and the UI making it more intuitive, but a component-based system will be introduced - namely, the widely adopted [ViewComponent](https://viewcomponent.org/) - to make the Admin easier to extend and customize.

To reduce the friction in the adoption, we are targeting a phased rollout, where both the new version and the old one coexist, letting the user choose which one they want to use.

Over time we will migrate all sections to the new Admin, eventually moving the old one into its one gem - or creating a new one for the new Admin.

The first mocks have been drafted, and work has started to refresh the side menu.


## Roles and users

When talking with users, one request we have heard multiple times is a more fine-grained set of permissions and roles and an easier way to configure them. We already have [SolidusUserRole](https://github.com/boomerdigital/solidus_user_roles) to solve this problem, but having it as a core feature in the Admin Panel makes more sense.


# That’s all, folks!

We are sure you are as excited as we are for Solidus's direction and progress! Stay tuned because 2023 will be a beefy and ambitious year, with much more to come and some big surprises.

Please join our [Slack community](https://solidusio.slack.com) if you haven’t already and leave there any comments, questions, and feedback.

We are also happy to chat about your experience with Solidus. If you like the idea, you can book a spot at the following link:  https://www.getclockwise.com/c/gabrielsambarino-nebulab-com/quick-meeting.

You will hear from us next quarter; take care, and have fun with Solidus!



* Gabriel and the Solidus team
