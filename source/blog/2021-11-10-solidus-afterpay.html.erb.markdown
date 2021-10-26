---
title: Using Afterpay with Solidus
date: 2021-11-10
tags: Solidus, Afterpay, Payments
author: Andrea Vassallo
cover_image: /blog/2021/11/10/solidus-afterpay/cover.jpg
---

Hey everyone! Today we are pretty excited to update you about the new Solidus partnership with [Afterpay](https://www.afterpay.com/en-US).

Afterpay is a payment method that allows your customers to buy their favorite products splitting the amount into 4 payments without interest.

<img src="/blog/2021/11/10/solidus-afterpay/afterpay.png" />

[Solidus Afterpay](https://github.com/nebulab/solidus_afterpay) is the result of the partnership - it's the tool that will make the Afterpay integration dead simple.

These days, Solidus Afterpay has just released version 0.1.0 and can be installed inside your application. With this version, you are able to use the extension both with Solidus and Solidus APIs since the shared endpoints can be consumed by a React/VueJS application.

## Solidus Afterpay

After the installation, you are able to create an Afterpay payment method using the Solidus admin panel.

<img src="/blog/2021/11/10/solidus-afterpay/solidus_afterpay_payment_method.png" />

On this page, you can update the Afterpay credentials and choose where the customer can make the payment. You have two options:

- default (popup window not selected): redirect the customer to the Afterpay panel
- popup window selected: show the Afterpay popup inside your application

The Afterpay credentials (merchant ID and secret key) will be given to you once you go through the retailer application on the Afterpay website.

## Checkout

If the configuration is correct, the customer will see the Afterpay payment method during the checkout payment step.

<img src="/blog/2021/11/10/solidus-afterpay/checkout_afterpay_login.png" />

Users can log in or create the Afterpay account without leaving the e-commerce site and can pay one out four installments upfront for the order amount. In this step, there will be information about payments and future charges. If Afterpay authorization is successful, the user is redirected to the order confirmation checkout step to complete the order.

<img src="/blog/2021/11/10/solidus-afterpay/checkout_afterpay_payment.png" />

When the order is placed and the first installment is charged, the customer will receive the order confirmation from Afterpay.

<img src="/blog/2021/11/10/solidus-afterpay/afterpay_order_resume.png" />

## Express checkout

Adding this partial inside your cart view, the Afterpay express checkout button is shown and the checkout is handled by Afterpay.

```
<%= render "solidus_afterpay/afterpay_checkout_button" %>
```

<img src="/blog/2021/11/10/solidus-afterpay/express_checkout_cart.png" />
<img src="/blog/2021/11/10/solidus-afterpay/express_checkout.png" />

Each time that a customer changes the delivery address using the Afterpay express checkout modal, Solidus calculates the shipping rates based on the available shipping methods. You can also [customize](https://github.com/nebulab/solidus_afterpay#customizing-shipping-rate-builder) this behavior by building a custom service object.

## Deferred VS Immediate payment flow

Afterpay allows you to configure the payment method choosing between the deferred payment flow and the immediate payment flow.
This option is related to the Solidus auto-capture payment flow:

- if the auto-capture is disabled, the application will use the deferred payment flow;
- if the auto-capture is enabled, the application will use the immediate payment flow

The difference is dead simple to understand.

In both cases, the first installment is charged by Afterpay when the order is placed. The difference is in when funds are settled between the merchant and Afterpay:

- in the immediate payment (capture) flow, the capture is processed at the time of placing the order, and the funds are settled with the merchant next business day (based on the order date);
- in the deferred payment flow, the captures (full/partial) are processed as items in the order are shipped, and the corresponding funds are settled with the merchant next business day (based on the capture date)

## Afterpay Messaging

Afterpay offers an on-site messaging component to notify the customer that pay in installments with Afterpay is available and will increase conversion rates.

<img src="/blog/2021/11/10/solidus-afterpay/messaging.png" />

You can configure a min and a max price to show the messaging below products not available with Afterpay.

## Solidus Admin Panel

Inside the Solidus admin panel, you have the ability to capture and refund an Afterpay payment.

<img src="/blog/2021/11/10/solidus-afterpay/solidus_admin_payment.png" />

Afterpay charged the customer for the first installment at time of order. When you capture the order after fulfillment (if using deferred capture), the funds will be settled with you the next business day by Afterpay.

If you refund the user, the future installments are deleted and the charged ones are refunded.

## The Bottom Line

That's all! As you could see, the configuration is very simple and you can integrate Afterpay with minimal effort. Just get the ball rolling!

If you're interested in supporting the work we do at Solidus, please consider making a donation on the OpenCollective - every little bit helps! And as a last note - sincere thanks to Afterpay for making all of this possible.
