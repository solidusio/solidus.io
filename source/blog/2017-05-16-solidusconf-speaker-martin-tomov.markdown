---
title: Solidusconf 2017 Speaker Martin Tomov
date: 2017-05-16 00:00 UTC
author: Gregor MacDougall
---

![solidusconf speaker martin tomov](2017-05-16-solidusconf-speaker-martin-tomov/martin-tomov.jpg)

**Please gives us an introduction for those who don’t know you**

My name is Martin Tomov, I am a full stack developer working primarily on ecommerce projects for Boomer Digital. I am based in London, UK.

**How long have you been working with Spree and Solidus?**

Almost 4 years now.

**What does your work look like on an average day?**

Since most of our clients are based in the US, it is really in the morning that I have to write code. My afternoons are usually busy with team and client communication, code review, and debugging of problems. In terms of development, it varies a lot - sometimes I just do frontend work with Alchemy CMS, other times I develop full features which have both a frontend and a backend part (like Gift Cards, or ElasticSearch integrations). There are also times when I take the role of a DevOps, and adjust server configurations manually, or using Puppet.

**That sounds very familiar. Can you give us an overview of what your SolidusConf talk is going to be about?**

My upcoming talk will present techniques to allow for a very efficient synchronization of product data with ElasticSearch, which is a fairly common problem when integrating with any data services. Usual approaches perform a sync with the elastic service on every model change, but this precludes adding of optimizations to the process. By placing an intermediate storage table, we can efficiently preload data, serialize concurrently, reduce network trips to the elastic service, and provide ourselves with a nice view of our serialized data. I will also speak about modelling Taxon tree data to Elastic mappings, so we can directly display the search results onto the frontend without going back to our database, as this seems to also be an area which is not trivial to implement.

**Very interesting. What were some of the biggest challenges you encountered while developing this?**

One of the goals was to efficiently pre-load data when performing the serializations of a batch of products, and avoid any N+1 queries in the process. To achieve that, I had to be careful when preloading using a _simple_ `includes`, as it can lead to a very high memory consumption. Instead, usually when a single figure is all there is needed, such as calculating the `count on hand` for every product, I resorted to other Ruby tricks to only get those values, avoiding the instantiation of Active Record objects. Another challenge was indeed modelling the taxons, so that they can be represented with a tree like navigation on the frontend, and allow the user to cross select from multiple taxonomy trees, for example:  `Music -> CDs`, and `Genre -> Rock`, and maybe some other taxonomy tree, such as `Promotions -> 20% off`.

**What are you looking forward to most at SolidusConf?**

I'm really looking forward to meeting all those people with whom I have exchanged so many messages through Github and Slack, but never actually spoken to. I really want to see what they are about, what their day to day problems are, and what their development aspirations are. (Whether it be containers, or Rails 5, or some SaaS product.)

**Sounds good. As a London local, what should the people from out of town/country consider doing when not at the conference?**

The weather in May is usually the best it can get here, so if the Rain Gods are merciful, visiting some of the Royal Parks (St. James’s Park, Regent's and Hyde Park) is highly recommended, as the flowers will certainly be blooming at the time, and the parks themselves are very beautiful. Craft beer pubs are naturally there as well, and I'd recommend trying the craft ciders, as they really are nothing like store bought.

**Thanks for that insight. I think that's all the questions I had. Is there anything that you wanted to mention before we wrap up?**

No, thank you for the time!

**Perfect. Thank-you!**

**It's not too late to [buy tickets](https://www.eventbrite.ca/e/solidusconf-2017-tickets-33284698429)**
