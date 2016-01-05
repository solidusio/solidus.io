---
title: Solidus Admin Improvements Roadmap
date: 2016-01-05 00:00 UTC
tags: admin, interface
author: Amanda Healey
---

A while ago I posted a [GitHub issue](https://github.com/solidusio/solidus/issues/487) and [blog post](/blog/2015/11/19/ux-roadmap-for-the-admin-interface.html) to let the community know that Stembolt was ramping up efforts to improve the Solidus admin UI. Progress has been made and we have started planning how to roll out the updates. We&rsquo;d like to give the community insight into our roadmap at this time.

The high level plan is:

* Fix/adjust structural components first. This includes layout structure and any larger information architecture changes.
* Improve internal page navigation. Things like creating a sticky header and moving right side navigation into tabs.
* Cleanup branding and colour palette. While on the surface this seems purely visual, there is some function behind cleaning up interactive elements and decluttering the page to improve the user experience.
* Make the move to complete a task in one page. The current model has the user navigating away to complete edit or add functions.
* Cleanup inconsistencies in the UI. Making the system look and behave the same across all pages will make it easier to extend in the future. It will also be more intuitive to users when they don&rsquo;t need to remember multiple ways of interacting and label names.
* Improve the search layout.
* Add new features.

We&rsquo;ve already completed some issues for 1.2 and are starting to plan for 1.3 and 1.4. Click on any of the links below to go to the GitHub issue to see images and the conversation around each feature.

### Release 1.2

* [Moving the navigation](https://github.com/solidusio/solidus/issues/487) from the top of the page to the left of the page for better extensibility.
* [Add a flyout](https://github.com/solidusio/solidus/issues/505) activated on hover to the navigation so that admin users have easier access to sub menu items.
* A collapsible function for the left navigation so that admin users can maximize screen real estate on smaller screen sizes.
* We&rsquo;ve started a [Solidus styleguide](https://github.com/solidusio/solidus/issues/533) where we can keep track of components to keep them consistent across the admin UI. This is also a good ‘playground’ of sorts where a component could be vetted before being added into the admin.


### Release 1.3

* Create a [sticky header](https://github.com/solidusio/solidus/issues/630) that is always in view and can hold the page title and action buttons.
* Replace right side navigation panels with [horizontal tabs](https://github.com/solidusio/solidus/issues/633) at the top of the page. This would affect the product listings, order listings and user listing pages in the out of the box admin.
* Make sub groups of the [settings](https://github.com/solidusio/solidus/issues/634) right side navigation and move it into the left side sub nav and tabs.
* Rework the content layout so that it can make best use of the full width screen size.


### Release 1.4

* An overhaul of the colours, spacing, icon system, interactive elements like links and buttons and any other [visual design and brand](https://github.com/solidusio/solidus/issues/520) related items.

We&rsquo;ll keep an updated plan on the blog, but if you have questions or comments you can join the broader plan conversation over on the [GitHub issue](https://github.com/solidusio/solidus/issues/655) where this is summarized, or in each individual issue if you have feature specific comments.
