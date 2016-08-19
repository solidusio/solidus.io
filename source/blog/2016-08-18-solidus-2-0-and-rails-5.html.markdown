---
title: Solidus 2.0 and Rails 5
tags: release
author: John Hawthorn
---

We've released Solidus [2.0.0.beta1](https://github.com/solidusio/solidus/releases/tag/v2.0.0.beta1) and [1.4.0.beta1](https://github.com/solidusio/solidus/releases/tag/v1.4.0.beta1)!

One of our primary concerns when developing Solidus is allowing easy upgrades.

It's essential that developers are able to upgrade to the latest version so
that contributing back to the platform makes sense for developers, and so that
new features and fixes can easily be picked up by the community.

Keeping our extensions [compatible between multiple
versions](http://extensions.solidus.io) is one example of this mindset. By
making it possible to upgrade extensions and Solidus itself separately, smaller
upgrades can be done resulting in fewer changes and therefore fewer issues and
less developer time to fix those issues.

After a series of betas, rails 5.0.0 was released June 30th. It doesn't present
as many changes as rails 4.0 (which introduced strong parameters), but it is a
more involved upgrade than rails 4.1 or 4.2.

In order to make the rails 5 upgrade as easy as possible we've made Solidus
2.0 and Solidus 1.4 nearly identical, with the only difference being rails 5
support.

Please give these releases a try, and [file any
issues](https://github.com/solidusio/solidus/issues) you come across. We plan
to keep these branches in sync and if all goes well release both 1.4.0 and
2.0.0 at the end of the month.

Special thanks to Alexander Varwijk, Graeme Nathan, and Peter Berkenbosch who
worked on bringing us Rails 5 support.
