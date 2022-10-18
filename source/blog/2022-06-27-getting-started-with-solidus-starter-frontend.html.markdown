---
title: Getting Started with Solidus Starter Frontend
date: 2022-06-27
tags: frontend
author: George Mendoza
cover_image: /blog/2022/06/27/getting-started-with-solidus-starter-frontend/00-cover.jpg
description: We're happy to introduce you to the new `solidus_starter_frontend` app template.
---

We're happy to introduce you to the new Solidus Starter Frontend app template.

## What is Solidus Starter Frontend?

Solidus Starter Frontend is the new frontend solution for Solidus. It aims to
deliver

* a minimal, semantic and accessible HTML skeleton
* a reusable component based architecture
* simple SASS styling strictly based on BEM
* frontend functionality written in vanilla JavaScript

## How is Solidus Starter Frontend different from the Solidus Frontend gem?

Based on our experience building eCommerce applications, we see that the vast
majority of stores heavily customize their storefront. As a result, the
controllers and views of `solidus_frontend` are essentially public API of the
gem. This makes it difficult to make improvements to `solidus_frontend` without
breaking existing Solidus apps. This has prevented `solidus_frontend` from
growing at the same pace as other Solidus components.

Since storefronts are heavily customized, we've come to the following
conclusions:

1. Decoupling the frontend gem from Solidus would allow us to improve the
frontend without breaking apps that depend on Solidus.

2. We can assume that once an app customizes its frontend, the app would no
longer need to continue depending on the frontend gem, since it may no longer
be able to keep its customizations compatible with the gem.

With these in mind, we've chosen to change `solidus_frontend` from a gem to a
Rails application template. As a template, we can make improvements to the
frontend for new applications to use. At the same time, we don't have to worry
about these improvements causing incompatibilities to existing Solidus
applications.

Thus, Solidus Starter Frontend is born.

## How do I install Solidus Starter Frontend on a new Rails app?

Currently, the `solidus` gem includes the legacy `solidus_frontend` gem. To
install `solidus` without `solidus_frontend`, we'll need to manually
add the rest of the Solidus components individually:

```sh
rails new store --skip-javascript
cd store
bundle add solidus_core solidus_backend solidus_api solidus_sample
bin/rails generate solidus:install --auto-accept
```

Once done, all we need to do is to run the following line:

```sh
LOCATION="https://raw.githubusercontent.com/solidusio/solidus_starter_frontend/master/template.rb" \
  bin/rails app:template
```

## What can I expect to see once the frontend is installed?

<div class="carousel">
  <div class="carousel-list">
    <figure class="figure">
      <img src="/blog/2022/06/27/getting-started-with-solidus-starter-frontend/10-home.png" class="figure-img img-fluid" />
      <figcaption class="figure-caption">Home page</figcaption>
    </figure>
    <figure class="figure">
      <img src="/blog/2022/06/27/getting-started-with-solidus-starter-frontend/20-product.png" class="figure-img img-fluid" />
      <figcaption class="figure-caption">Product page</figcaption>
    </figure>
    <figure class="figure">
      <img src="/blog/2022/06/27/getting-started-with-solidus-starter-frontend/30-cart.png" class="figure-img img-fluid" />
      <figcaption class="figure-caption">Cart page</figcaption>
    </figure>
    <figure class="figure">
      <img src="/blog/2022/06/27/getting-started-with-solidus-starter-frontend/40-login.png" class="figure-img img-fluid" />
      <figcaption class="figure-caption">Login page</figcaption>
    </figure>
    <figure class="figure">
      <img src="/blog/2022/06/27/getting-started-with-solidus-starter-frontend/50-checkout-address.png" class="figure-img img-fluid" />
      <figcaption class="figure-caption">Checkout - Address page</figcaption>
    </figure>
    <figure class="figure">
      <img src="/blog/2022/06/27/getting-started-with-solidus-starter-frontend/60-checkout-delivery.png" class="figure-img img-fluid" />
      <figcaption class="figure-caption">Checkout - Delivery page</figcaption>
    </figure>
    <figure class="figure">
      <img src="/blog/2022/06/27/getting-started-with-solidus-starter-frontend/70-checkout-payment.png" class="figure-img img-fluid" />
      <figcaption class="figure-caption">Checkout - Payment page</figcaption>
    </figure>
    <figure class="figure">
      <img src="/blog/2022/06/27/getting-started-with-solidus-starter-frontend/80-checkout-confirm.png" class="figure-img img-fluid" />
      <figcaption class="figure-caption">Checkout - Confirm page</figcaption>
    </figure>
    <figure class="figure">
      <img src="/blog/2022/06/27/getting-started-with-solidus-starter-frontend/90-checkout-complete.png" class="figure-img img-fluid" />
      <figcaption class="figure-caption">Checkout - Complete page</figcaption>
    </figure>
  </div>
</div>

In addition to generating views for authentication and storefront functionality,
the application template will also generate

* Mailers with their corresponding views
* [View components](https://viewcomponent.org) for complex presentational logic
* Unit and integration specs for testing the frontend

## What's next for Solidus Starter Frontend?

For Solidus 4, SolidusStarterFrontend will become the recommended option for
building the storefront of a new Solidus app. We're planning to remove
SolidusFrontend from the solidus meta-package gem and move its code to a new
repo. If your app depends on SolidusFrontend, you'll need to explicitly add
`solidus_frontend` to your Gemfile in order to continue using it.

We are also still working on a solution to make the extensions compatible with
this new frontend.

## Where can I find more information on Solidus Starter Frontend?

You can check out the accompanying [screencast](https://youtu.be/UpMYAH9SBCg) of
this blog post in our Solidus
[YouTube channel](https://www.youtube.com/channel/UCiFcxyt11T6QIIDPk2w0Jjw).
You can also find the
[repo](https://github.com/solidusio/solidus_starter_frontend)
of Solidus Starter Frontend on GitHub.
