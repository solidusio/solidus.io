---
title: "This Month in Solidus: May 2021"
date: 2021-06-08
tags: Solidus
author: Alessandro Desantis
cover_image: /blog/shared/images/solidus-monthly-update.png
description: >
  Dive in and see everything that happened in the Solidus world in May 2021!
---

Hello everyone, and welcome to This Month in Solidus: May 2021 edition!

### Solidus <-> ShipStation 1.0.0 Is Out!

After extensive production testing, we're finally happy to release the first stable version of
[solidus_shipstation](https://github.com/solidusio-contrib/solidus_shipstation)!

Our ShipStation integration supports both the legacy XML integration as well as the new, more
powerful ShipStation API. It uses a smart batch-syncing mechanism to work around ShipStation's low
rate limits, which allows it to sync up to 4000 orders/minute via the API, and it supports webhooks
to sync tracking information back to Solidus.

We've been using the extension in production in a few different stores with great success, so feel
free to go ahead and give it a try!

_Pro-tip: Combine solidus_shipstation with [solidus_easypost](https://github.com/solidusio-contrib/solidus_easypost)
to gain complete ownership of your post-purchase experience and fulfillment process!_

### Solidus Now Supports Ruby 3

We have recently introduced [Ruby 3 support!](https://github.com/solidusio/solidus/pull/4072)

While this was a pretty low-lift initiative on our side, it enables all Solidus users to benefit
from all the latest improvements to the language, and paves the way for a more modern Solidus
ecosystem!

### A Goodie for Docker Fans...

If you like developing with Docker and missed Docker support in Solidus, cry no more! You can now
boot up the codebase with as little as `docker-compose up`, thanks to our new 
[Docker Compose support](https://github.com/solidusio/solidus/pull/3947).

We hope this will make it even easier to contribute to Solidus for new and experienced users alike!

### ...And a Few More for Everyone Else!

The community has also been hard at work on a few improvements and bugfixes:

- Stock location sorting had been inadvertently broken in a previous change, but Ikraam Ghoor from
  Nebulab was kind enough to [fix it!](https://github.com/solidusio/solidus/pull/3954) Thanks, Ikraam!
- The [ItemTotal](https://github.com/solidusio/solidus/pull/3431) promo rule is now easier to extend
  and customize, thanks to Elia Schito from Nebulab!
- API attributes have been [moved to a configuration option](https://github.com/solidusio/solidus/pull/4039),
  which makes it easier to customize them without running into any autoloading issues. Thanks to
  Stefano Nada from Nebulab!
- In rare cases, it was possible for two store credit instances to have the same authorization code,
  if they were generated at very close moments in time. This was [fixed](https://github.com/solidusio/solidus/pull/4060)
  by Andrea Longhi from Nebulab!
- A validation on customer returns would break when the return did not have any items. [This isn't the
  case anymore](https://github.com/solidusio/solidus/pull/4068), thanks to Willian Veiga!
- A bug was preventing admins from setting the reason for return items. The issue was found and 
  [fixed](https://github.com/solidusio/solidus/pull/4080) by Andrea Longhi from Nebulab!

That's it for this month! We'll see you in 30 day, stronger, faster and with more updates!

_<p style="text-align: right">Spend an awesome Tuesday! 👋️</p>_
