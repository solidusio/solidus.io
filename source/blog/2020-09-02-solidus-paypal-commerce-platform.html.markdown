---
title: "Introducing Solidus PayPal Commerce Platform"
date: 2020-09-02
tags: Solidus
cover_image: /blog/2020/09/02/solidus-paypal-commerce-platform/cover.jpg
description: Learn about the new default Solidus payment method
author: Sean Denny
---

###PayPal Made Easy

We're excited to announce that Solidus has a new payment method - [Solidus PayPal Commerce Platform](https://github.com/solidusio-contrib/solidus_paypal_commerce_platform)! This extension allows you to accept PayPal and credit/debit card payments directly to your business PayPal account, and adds some handy new features to Solidus.

###What new features does this extension add?

Well, dear reader, I'm glad you asked! In addition to adding an easy-to-use payment method, this extenion comes packed with three new features:

####Payment Setup Wizards

<img src="/blog/2020/09/02/solidus-paypal-commerce-platform/wizard.png" />

We've added a system where any payment method can add a "payment setup wizard" - easing the onboarding process. For this extension, what that means is that you can hook your website to your PayPal account at the click of a button.

####Cart Payment Buttons

<img src="/blog/2020/09/02/solidus-paypal-commerce-platform/cart.png" />

Now your users can check out directly from your cart! This streamlined process will take the user to PayPal. During the checkout process, PayPal will collect the necessary shipping information and send it back to your server. Upon confirming the payment, the user will be taken to the order confirm page, where they can complete their order. 

####Product Payment Buttons

<img src="/blog/2020/09/02/solidus-paypal-commerce-platform/product.png" />

In addition to adding payment buttons to the cart, we've also added them to the product page! Unlike the cart button, product payment buttons act as an "instant checkout" feature - this will take the user to PayPal for payment, and the order will be created and populated will all necessary information. If your users just want the one item, they can skip almost the entire checkout process. Like the cart button, on payment, the user will be directed to the order confirmation page for final confirmation.

###What does "Default Payment Method" mean?

This extension is now the default payment method of Solidus. What that means is when you install new versions of Solidus, you'll see a prompt during installation asking you what payment method you'd like to install. Currently, those options will be "paypal" - installing this extension - and "none" - installing none. Any payment methods can be added to this list with no problems, but PayPal will be the default option.

###What should I know about the installation process?

The integration process is described in the extension README, but here are some common gotchas and possible surprises:

######Phone Number Validation

Because addresses coming from PayPal do not require phone numbers, we've turned off phone number validation for addresses. You can override this, but you'll need to create a method for getting a phone number from your customers before or after returning from PayPal.

######Order Completion

When your customer approves a payment on PayPal, they're taken to the checkout path - which should direct them to the order confirmation page. If you've removed the order confirmation step, you'll need to adjust the javascript method that redirects users to instead complete the order.

######Order Totals

When a user clicks the PayPal button, Solidus sends line_item, adjustment, shipping and tax totals to PayPal. If these totals don't match, PayPal will not allow checkout. If you've done extensive modifications to anything involve the order total, you'll want to review the paypal_order model for accuracy.

######Shipping Estimates

When a user logs in or changes their address on PayPal, PayPal sends a partial shipping address (missing only street address) and expects us to return an estimate for shipping. We simulate this change in the shipping rates controller, and return what the shipping would be for that address. Then, after the user confirms their payment, we get the finalized address from PayPal. This shouldn't cause you any issues unless you have a lot of customization around shipping rates, but you should keep it in mind just in case.

### Referral Fee

This extension has been sponsored by PayPal and implemented by [Nebulab](https://nebulab.it). PayPal will pay a commission fee to the maintainers for each order placed through the new payment gateway.

###What's Next?

This extension lays the groundwork for the future of Solidus payment methods. With the default payment system, you won't have to mess with your gemfile to install your payment extension. With the setup wizard, you'll be able to set up your payment provider at the click of a button. And with product payment buttons, installing an instant checkout feature is easier than ever.

###Final words

We've worked hard on this extension, and we hope it lives up to your expectations. If you find room for improvement, feel free to open an issue or PR!

And as always, make sure you stay up-to-date on the latest Solidus news by subscribing to the [Solidus newsletter](https://solidus.us13.list-manage.com/subscribe/post?u=679f4835b2683d59bc5762ec3&id=3ce07e9582).


Thanks, Solidus Community! You rock!
