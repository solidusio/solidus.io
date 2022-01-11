---
title: Using Afterpay with Solidus
date: 2022-01-11
tags: Solidus, Afterpay, Payments
author: Andrea Vassallo
cover_image: /blog/2022/01/11/solidus-afterpay/cover.jpg
---

Hey everyone! Today we are excited to share with you Solidus’ newly forged partnership with [Afterpay](https://www.afterpay.com/).

[Afterpay](https://www.afterpay.com/) is a payment method that allows your customers to pay for their cart in 4 interest-free installments.

<img src="/blog/2022/01/11/solidus-afterpay/afterpay.png" />

The [Solidus and Afterpay](https://github.com/nebulab/solidus_afterpay) extension makes it very easy to add the Afterpay payment method to your store.

You are able to use the extension both with Solidus and Solidus APIs since the shared endpoints can be consumed by a React/VueJS application.

## Solidus Afterpay Configuration

After the installation, you will be able to configure the Afterpay payment method using the Solidus admin panel.

<img src="/blog/2022/01/11/solidus-afterpay/solidus_afterpay_payment_method.png" />

On this page, you can update the Afterpay credentials and choose where the customer can make the payment. You have two options changeable by the `popup window` checkbox:

- redirect the customer to the Afterpay panel;
- show the Afterpay popup inside your application

The Afterpay credentials (merchant ID and secret key) will be given to you once you go through the [retailer application on the Afterpay website](https://get.afterpay.com/app/).

## Checkout

If the configuration is correct, the customer will see the Afterpay payment method during the checkout payment step.

<img src="/blog/2022/01/11/solidus-afterpay/checkout_afterpay_login.png" />

Users can log in or create an Afterpay account without leaving your e-commerce site and will pay the first installment (25%) at the time of the order. Afterpay will pay the merchant the full amount of the order minus any fees. See [Getting Paid](https://developers.afterpay.com/afterpay-online/docs/getting-paid). In this step, there will be information about payments and future charges. If Afterpay authorization is successful, the user is redirected to the order confirmation checkout step to complete the order.

<img src="/blog/2022/01/11/solidus-afterpay/checkout_afterpay_payment.png" />

When the order is placed and the first installment is charged, the customer will receive the order confirmation from Afterpay.

<img src="/blog/2022/01/11/solidus-afterpay/afterpay_order_resume.png" />

## Express checkout

Adding this partial inside your cart view, the [Afterpay Express Checkout](https://developers.afterpay.com/afterpay-online/docs/what-is-express-checkout-1) button is shown and the checkout is handled by Afterpay.

```
<%= render "solidus_afterpay/afterpay_checkout_button" %>
```

<img src="/blog/2022/01/11/solidus-afterpay/express_checkout_cart.png" />
<img src="/blog/2022/01/11/solidus-afterpay/express_checkout.png" />

Each time a customer changes the delivery address using the Afterpay express checkout modal, Solidus calculates the shipping rates based on the available shipping methods. You can also [customize](https://github.com/nebulab/solidus_afterpay#customizing-shipping-rate-builder) this behavior by building a custom service object.

## Deferred VS Immediate Payment Flow

Afterpay allows you to configure the payment method choosing between the [deferred payment flow and the immediate payment flow](https://developers.afterpay.com/afterpay-online/docs/api-calls-and-payment-flows).
This option is related to the Solidus auto-capture payment flow:

- if the auto-capture is disabled, the application will use the deferred payment flow;
- if the auto-capture is enabled, the application will use the immediate payment flow

In both cases, the first installment is charged by Afterpay when the order is placed. The difference is in when funds are settled between the merchant and Afterpay.

- in the immediate payment (capture) flow, the capture is processed at the time of placing the order, and the funds are settled with the merchant next business day (based on the order date);
- in the deferred payment flow, the captures (full/partial) are processed as items in the order are shipped, and the corresponding funds are settled with the merchant next business day (based on the capture date)

## Afterpay Messaging

Afterpay offers an on-site messaging component to notify customers that Afterpay installments are available. Ensuring customers are aware of an installment payment option on product and cart pages helps increase conversation rates and increase average order values.

<img src="/blog/2022/01/11/solidus-afterpay/messaging.png" />

You can configure a min and a max price to show the messaging below products not available with Afterpay.

## Solidus Admin Panel

Inside the Solidus admin panel, you have the ability to capture and refund an Afterpay payment.

<img src="/blog/2022/01/11/solidus-afterpay/solidus_admin_payment.png" />

Afterpay charges the customer the first installment at time of order. When you capture the order after fulfillment (if using deferred capture), the funds will be settled with you the next business day by Afterpay.

If you refund the user, the future installments are cancelled and any money charged to the consumer will be refunded

## The Bottom Line

That's all! As you can see, the configuration is very simple and you can integrate Afterpay with minimal effort. Just get the ball rolling!

If you're interested in supporting the work we do at Solidus, please consider making a donation on the OpenCollective - every little bit helps! And as a last note - sincere thanks to Afterpay for making all of this possible.

_Late fees may apply. Eligibility criteria apply. See [afterpay.com](http://www.afterpay.com/) for more details. Loans to California residents made or arranged pursuant to a California Finance Lenders Law license._
