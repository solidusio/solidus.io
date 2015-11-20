---
title: UX Roadmap for the Admin Interface
date: 2015-11-19 00:00 UTC
tags: admin, interface
author: Amanda Healey
---

I recently joined [Stembolt](http://stembolt.com/) as
their first user experience designer. I'll be working on client sites eventually,
but in the meantime I've been getting friendly with the Solidus admin. I already
have ideas on improving inconsistent labels, unintuitive interfaces and other
future enhancements. I've also gained insight on navigation and other interface
elements from email, Slack and GitHub chats with companies using Solidus. Special
thanks to [Thomas von Deyen](https://github.com/tvdeyen)
from [magic labs](https://magiclabs.de/en/home) for his
feedback so far.

The high level plan is to adjust the global structure of the site and clean up
inconsistencies so that we have a solid base to build on. Then we'll be able to
tighten up interactions and polish individual pages. A new visual design palette
will help the user focus on the content area and better recognize interactive
elements on the page.

Stembolt already has developers putting effort into these changes and many are
on track to be included in the 1.2 release of Solidus. Some improvements include:

 * [moving the top navigation](https://github.com/solidusio/solidus/issues/487)
   to the left side for easier extensibility
 * including a [flyout](https://github.com/solidusio/solidus/issues/505)
   on that navigation for efficient access to sub nav items with fewer
   clicks (read: page loads)
 * making that navigation collapsible so that it uses less space when not needed
 * creating a 'sticky header' to hold the title and action buttons that will
   always be in view
 * creating a 'sticky footer' to hold page navigation and flash messages

Here's an early wireframe of that layout.

![left navigation wireframe](2015-11-19-ux-roadmap-for-the-admin-interface/left-nav-sidebar.png)

[Kevin Attfield](https://github.com/Sinetheta), a
developer at Stembolt, took this wireframe and the current colour palette to
create a left side navigation.

![left navigation screenshot](2015-11-19-ux-roadmap-for-the-admin-interface/solidus-left-nav.png)

We're currently gathering feedback regarding the order and grouping of menu
items so that we can make them more intuitive for admin users. Much prettier
than wireframes, I've also started drawing mockups for what it could look like
with a new colour palette. This is still a work in progress, but this is what
I've put together so far.

![potential Solidus branding](2015-11-19-ux-roadmap-for-the-admin-interface/solidus-branding.png)

There are plans to move add and edit functions into the page that they're
affecting and to cleanup the way those forms are presented. Search filter layout
is under scrutiny and fields may be added or removed depending on their
usefulness. I also hope to clean up inconsistencies in labels, error messaging,
and field validation to make the admin more intuitive to use.

We're implementing these changes in small chunks and multiple phases. This,
coupled with our documentation, should make upgrading more manageable than some of
the huge sweeping changes we've seen in the past.

All these items are being discussed or will be posted for discussion in the
[Solidus GitHub](https://github.com/solidusio/solidus/issues). If you'd like to share your opinion on how our improvements will
affect how you use Solidus, come over and join the conversation.
