---
title: "This Month in Solidus: Holidays 2020 Edition"
date: 2021-02-05
tags: Solidus
author: Alessandro Desantis
cover_image: /blog/shared/images/solidus-monthly-update.png
description: >
  Dive in and see everything that happened in the Solidus world in December 2020 and January 2021!
---

Hey there, and welcome to This Month in Solidus: 2020 EOY Edition! This update covers everything
that happened in the Solidus world in December 2020 and January 2021.

### Solidus 2.11.4 Is Out, with Rails 6.1 Support

Solidus 2.11.4 was released on January 19, and includes full support for Rails 6.1 as well as a few
other minor improvements and bugfixes.

If you are were planning to upgrade to Rails 6.1, now is a good time to do it!

Thanks to Filippo Liverani from Nebulab for [taking the lead](https://github.com/solidusio/solidus/pull/3862)
on this!

### Solidus 3.0: A Clean Start, Coming Soon!

In the past few months, most of the work has gone towards [removing all the code that was deprecated
in Solidus 2.x](https://github.com/solidusio/solidus/pull/3818), in preparation for Solidus 3.

This was a *huge* lift that required the effort of many contributors across several months, and the
end result is pretty amazing: we have removed almost _6,000_ lines of legacy code, which included
deprecated classes, methods, preferences and supporting utilities.

Solidus 3 represents a clean start for the framework and allows us to continue iterating and stay on
top of industry trends, while also providing the same stability and the same guarantees as its
predecessors.

A huge thanks to everyone that was involved in this, and especially to Filippo Liverani, Dumitru
Ceban, Daniele Palombo and Alberto Vena from Nebulab!

### Extensions Updates: solidus_feeds and solidus_subscriptions

In the extensions ecosystem, most of the effort has went into two major initiatives that should make
it even easier to jumpstart a modern Solidus store.

[solidus_feeds](https://github.com/solidusio-contrib/solidus_feeds) was just released, with built-in
support for the Google Merchant XML format and full decoupling of feed generation and publishing. In
other words, you can easily implement your custom feed formats and take advantage of one of the
existing publishers, or publish one of the existing feed formats to some custom location, all
through a fully configurable API. Thanks to Elia Schito, Nicolò Rebughini and Flavio Auciello from
Nebulab for their hard work on this.

[solidus_subscriptions](https://github.com/solidusio-contrib/solidus_subscriptions), an old and
beloved extension, has also seen a lot of improvements recently. Most of the work has gone towards
improving the admin UI around subscriptions and streamlining the processing logic to make it more
flexible and resilient than ever. Some goodies were also thrown in for good measure, such as
built-in [ChurnBuster](https://churnbuster.com) support and more choices around failed payment
processing. Thanks to Igor Barbosa, Nicolò Rebughini and Alessandro Desantis from Nebulab!

### GitHub Discussions Is the Place to Be

Up until now, all of the community interactions have happened mostly in our [Slack workspace](http://slack.solidus.io)
(which, by the way, is still worth joining if you're not there yet!). While Slack is great for quick
chit-chat and casual interactions, it's less than ideal for support requests: it's not indexed and
hard to search. As a result, great answers were getting lost, and great questions were being asked
over and over again.

When [GitHub Discussions](https://github.com/solidusio/solidus/discussions) became available, it
just felt like the perfect solution to our problems, and we decided to give it a try. You can access
our discussions board by clicking the "Discussions" tab in the main Solidus repository. Some quality
conversation is already happening there, so make sure to swing by and say hello!

### New Roadmap in The Works

With the new year, we immediately started to work on a new [roadmap](https://solidus.io/roadmap) for
Solidus! The new roadmap will include a mix of initiatives that we still believe in and didn't get
to just yet, and new projects that we believe will set Solidus on the path for success.

If you have any feedback for us, don't be a stranger to jump on [Slack](http://slack.solidus.io) or
[GitHub Discussions](https://github.com/solidusio/solidus/discussions)!

_<p style="text-align: right">Until next time! 👋</p>_
