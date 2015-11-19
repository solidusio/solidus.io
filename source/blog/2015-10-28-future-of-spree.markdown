---
title: The Future of Spree and the Future of Solidus
date: 2015-10-28
tags: spree
author: Solidus core team
---

Spree Commerce, the company that has stood behind Spree OSS over the past years has [announced](https://spreecommerce.com/blog/future-of-spree-oss){: target="_blank"} that it will stop investing in the open source project and that there currently is no core team. We — the developers at [Bonobos](https://www.bonobos.com){: target="_blank"} and [Stembolt](https://stembolt.com/){: target="_blank"} (formerly FreeRunning Technologies) — forked Spree and called it [Solidus](http://solidus.io/).

We believe that Solidus is the future of the Spree open source project and that it should power your production stores as it does ours. Why? Let’s look at some of the improvements we’ve already shipped:

* Improved permissions, allowing fine-grained access control through roles
* Cartons, a representation of the actual package as shipped out by your warehouse
* Stock transfers and a new stock management interface
* Proper locking when updating orders through the API
* Store credit
* Multiple codes per promotion
* Adjustment and return reasons
* Item cancellations to better deal with short ships
* More reliable, randomized specs with vastly reduced sporadic failures
* Patched three critical security vulnerabilities which we also contributed back to Spree
* Many other improvements and bug fixes

We run our stores on Solidus; bonobos.com and ayr.com are powered by the head of our master branch. This helps explain our vision for this project:

* Stable, high-quality code: Nothing gets into master until it has two thumbs from core contributors who feel confident that it is production-ready code.
* Easier upgradeability: We take great care to either make changes backwards-compatible or to clearly document breaking changes. We want you to always run on our latest version.
* Better extensibility: We are adding specific, well-documented extension hooks for which we can better achieve API compatibility. This is a work in progress but our goal is: no more class_eval.

But don’t take our word for it: Check out our [GitHub page](https://github.com/solidusio/solidus){: target="_blank"}. You’ll see an active community and a stable core team of six — John Hawthorn of Stembolt even works on Solidus full-time. There are lots of great-quality pull requests — from Bonobos (12 developers) and Stembolt (17 developers) as well as from the wider community. You’re also invited to join our discussions in our [public Slack channel](http://slack.solidus.io/){: target="_blank"}.

As excited as we are about the future of Solidus, we are enormously grateful to Spree Commerce and all the developers that contributed to Spree over the years. Solidus would not be possible without their help. Thank you!

The Solidus core team

Jordan Brough<br/>
Clarke Brunsdon<br/>
John Hawthorn<br/>
Gregor MacDougall<br/>
Andrew Thal<br/>
Magnus von Koeller
