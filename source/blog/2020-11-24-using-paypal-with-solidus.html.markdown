---
title: Using PayPal with Solidus
date: 2020-11-24
tags: Solidus
author: Sean Denny
cover_image: /blog/2020/11/24/using-paypal-with-solidus/cover.jpg
description: >
  PayPal has been working with Solidus in a big way over the last year, find out what's new in the world of payment gateways, and which one makes more sense for your store.
---

We're excited to share some news with you. As you are probably aware, Solidus has been working with PayPal recently. They've been the gold sponsor for our last two conferences - and more recently, they've helped us revitalize Solidus PayPal Braintree and release the new Solidus PayPal Commerce Platform extension.

We're excited to announce that Solidus PayPal Commerce Platform has just released version 0.2.1, and that Solidus PayPal Braintree has just released version 1.0.0. Both of these extensions are ready to go, all _you_ need to do is find out which one is right for you.

### Two Extensions, Two Paths

Both extensions bring the easily recognized PayPal buttons into your store, but they operate in very different ways. Below is a quick breakdown of what to expect from each extension.

Before we begin though, it's important to note that both of these extensions use the updated PayPal SDK. This will allow your consumers to checkout using PayPal's new Buy Now, Pay Later options, as well as use any payment methods that might be local for them - for instance, your customers from Italy will be able to check out with MyBank, an Italian payment solution.

<img src="/blog/2020/11/24/using-paypal-with-solidus/de.png" />

Both extensions also include the ability to display consumer financing messages to your consumers, which increases conversion rates and average order value - but that'll be covered in another blog post! For now, let's focus on the differences between the two extensions.

## Solidus PayPal Braintree

If you've used PayPal with Solidus in the past, this is probably what you're familiar with. Over the last month, we've provided many useful updates to this extension, as well as update the PayPal SDK to work with the newer PayPal options.

If you're already on this extension, the most important changes are that the extension now works with Rails 6, and you can now pass placeholder text or styling instructions to the Braintree hosted fields, making designing around the credit card inputs a bit easier.

So why use this extension over Solidus PayPal Commerce Platform? Well first, it offers more options for your consumers. Through Braintree, you're able to accept credit cards with 3DSecure enabled, and Apple Pay as well. Through hosted fields, you're also given a bit more control over the checkout experience. 

<img src="/blog/2020/11/24/using-paypal-with-solidus/placeholder.png" />

The downside of this extension is that it requires a lot more setup than Solidus PayPal Commerce Platform. The initial setup can take a while, and is geared more towards developers. If you want to use PayPal's consumer credit messaging, you'll have to change your settings around in a particular way to allow that. If you want to utilize the cart checkout, you'll need to add the cart checkout partial. In addition, fraud detection is your responsibility with Braintree - you'll need to be vigilant about response codes.

## Solidus PayPal Commerce Platform

While the Braintree extension offers a few more options, this extension is much more complete right out of the box. Installation is dead simple - in fact, with Solidus 2.11, you can choose to install this while you're installing Solidus. Even payment method creation is simplified - there's a new "setup" button on the admin payment method index that will walk you through setup - just log into your PayPal account, grant your server some permissions, and the payment_method is automatically created, with all the correct credentials already filled in. If you don't already have a PayPal account, the setup process will guide you through account creation.

<img src="/blog/2020/11/24/using-paypal-with-solidus/onboarding.png" />

In addition to the easy onboarding process, this extension also offers instant checkout from the product page. Your customers will be able to go directly to the PayPal checkout from the product page, allowing for orders to be completed in no time at all. Cart checkout is also available out of the box.

<img src="/blog/2020/11/24/using-paypal-with-solidus/product.png" />

Credit card payments are also taken care of fully by PayPal - no need to worry about fraud going this route.

The downsides? This extension doesn't offer Apple Pay like the Braintree extension does - yet - and it doesn't utilize Braintree's hosted fields - meaning you'll have less control over the credit card field styling.

### The Bottom Line

On one hand, we've got a dead simple PayPal integration that has some really cool features and works out of the box, and on the other is a robust (but more complicated) extension that has stood the test of time, and brings Apple Pay into the fold. Ultimately, it's up to you to decide which extension is the right choice for your website - We're just excited to be able to bring these options to the table.

If you're interested in supporting the work we do at Solidus, [please consider making a donation on the OpenCollective](https://opencollective.com/solidus) - every little bit helps! And as a last note - sincere thanks to PayPal for making all of this possible.
