---
title: Add Pay Later Messaging To Your Solidus App
date: 2020-11-26
tags: Solidus
author: Sean Denny
cover_image: /blog/2020/11/26/add-pay-later-messaging-to-your-solidus-app/cover.jpg
description: >
  Our new PayPal extension and updated Braintree extension have some new features. Find out how to enable pay later messaging and increase your conversion rates.
---

PayPal has been working with Solidus over the last year, and they've really contributed to the platform in a big way. Not only have they been the gold sponsor for our last two conferences, they have also helped us revitalize the Braintree extension, create the PayPal Commerce Platform extension, and more to come!

The new PayPal buttons - which we've updated the Braintree extension to use, and have created the PayPal Commerce Platform extension around - provide several exciting financing options to your consumers, in addition to the ability to pay with their credit card or with their PayPal balance.

Why are financing options important? Consumer financing solutions are increasingly popular as shoppers seek interest free solutions for their online purchases. In addition to higher conversion rates, PayPal has seen its merchants’ average order value (AOV) increase on average 25 percent when offering PayPal Credit, their 6 month interest free service. In October, PayPal introduced a second consumer financing solution, Pay in 4, which is an interest free service that offers a shorter payback period.

<img src="/blog/2020/11/26/add-pay-later-messaging-to-your-solidus-app/paypal-buttons.png" />

Also included in both extensions is the ability to promote PayPal messaging to your consumers about financing options. This is important because statistically, stores that display financing options before checkout have higher conversion rates. The extension allows you to provide messaging on the product page, cart page and payment page, and makes it easy to add banner messaging for consumers to learn more for the home page.

<img src="/blog/2020/11/26/add-pay-later-messaging-to-your-solidus-app/paypal-messaging.png" />

Below, we'll cover how to get PayPal messaging up and running for both extensions.

### Solidus PayPal Braintree

The installation of this extension is pretty simple, and you can read the details in the [extension README](https://github.com/solidusio/solidus_paypal_braintree#installation). Once installed, you'll need to do a few things to get up and running.

On the `Braintree` tab on admin side, you'll find the overall setup for the extension. Here, you'll want to ensure that PayPal is enabled, and the `PayPal Button Messaging` option is set to `true`.

<img src="/blog/2020/11/26/add-pay-later-messaging-to-your-solidus-app/bt-setup.png" />

Next, on the payment method index, you'll want to create a new payment and input all of the relevant information. You'll also need to set the PayPal checkout flow to `checkout` instead of `vault` - PayPal is not able to offer services like `pay in 4` if you're using the `vault` flow, so they do not support using the messaging component for that flow.

<img src="/blog/2020/11/26/add-pay-later-messaging-to-your-solidus-app/bt-checkout.png" />

And with that, you're set up! You should see messaging on the checkout payment page, as well as the cart checkout component if you're using it.

### Solidus PayPal Commerce Platform

Good news for this extension - installation is simple, and PayPal messaging is enabled by default. From Solidus 2.11, you can install this extension during the initial Solidus installation. You can read more about the installation process on the [extension README](https://github.com/solidusio-contrib/solidus_paypal_commerce_platform#installation).

Once installed, hooking your PayPal account to the store is simple. Go to the admin payment_method index, and you should now see a setup button for PayPal Commerce Platform.

<img src="/blog/2020/11/26/add-pay-later-messaging-to-your-solidus-app/wizard.png" />

Simply click the button, enter your login information, and confirm that you want to use your account to accept payments.

You're done! You'll see both PayPal buttons and messaging components on the product, cart, and payment page.

## Messaging Location

Just a quick note here - The location of the PayPal messaging component on both extensions is for demonstration purposes only - you should move it to a location that makes sense for your website! PayPal recommends keeping the messaging component near the product or order total where available.

<img src="/blog/2020/11/26/add-pay-later-messaging-to-your-solidus-app/payment.png" />

## The Future

We're beginning the next phase of integration with PayPal products, and we think you'll be excited about what's coming next - so stay tuned, and keep building cool things!
