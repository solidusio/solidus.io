---
title: "Increase revenue by accepting payment instalments with Affirm."
date: 2020-05-25 00:00 UTC
tags: Solidus, Payments, Instalments, Extensions
author: Peter Berkenbosch
cover_image: /blog/2020/05/25/increase-revenue-by-accepting-payment-instalments-with-affirm/affirm-numbers.png
description: >
  Increase revenue by accepting payment instalments on your Solidus store with Affirm and
  prepare for lease-to-own (LTO) providers.

---

Affirm provides merchants with an option to offer payment instalments, Solidus has been supporting this with the [official extension for Affirm](https://github.com/solidusio/solidus_affirm) since November 2016!

Using Affirm will increase your AOV and improves the repeating customer rates and NPS rates.

![](/blog/2020/05/25/increase-revenue-by-accepting-payment-instalments-with-affirm/affirm-numbers.png)

A couple of weeks ago we started with developing [a new version](https://github.com/solidusio-contrib/solidus_affirm_v2). This new version has been refactored and upgraded to use the new [Affirm Transaction API](https://docs.affirm.com/affirm-developers/changelog/transactions-api).

The work for this extension is coordinated by the [Solidus Stakeholders](https://solidus.io/community) and funded by the [Solidus Open Collective Fund](https://opencollective.com/solidus).


With this extension merchants will also be able to use lease-to-own (LTO) providers who partnered with Affirm. Please reach out to Affirm directly to request access for any LTO partners. This is currently in beta at Affirm and not available by default just yet. The Affirm V2 extension supports LTO out of the box.

The following example shows how easy it is to add the Affirm promotional messaging to your storefront.  

First we have to generate a view override for the cart partial, in this sample we want to show the Affirm payment option under the price.

We can generate our override like this:
```
bundle exec rails g solidus:views:override --only products/_cart_form
```
(for more information about customizing your storefront see the [customization guide](https://guides.solidus.io/developers/customizations/customizing-storefront.html) )

This file will be in `app/views/spree/products/_cart_form.html.erb`. To show the Affirm promotional messaging we will need the `Affirm.js` to be loaded.

The Solidus extension provides a partial that will configure and load the `Affirm.js` in the `head` element of your storefront. By default it will only load this in the payment step, but for this specific sample we will be adding it at the top of our generated partial like so:

![](/blog/2020/05/25/increase-revenue-by-accepting-payment-instalments-with-affirm/affirmjs-partial-cart.png)
`app/views/spree/products/_cart_form.html.erb`

The next, and last step, is to add a html element at the spot where we want to list the Affirm message. There are a lot of options we can use, you can find the documentation for all the html element options at this link [Affirm HTML Ref](https://docs.affirm.com/affirm-developers/docs/html-reference)

We will have to make sure to set the html class to `affirm-as-low-as`, specify the `data-page` and set the `data-amount` attribute to the product price. The `data-amount` has to be in cents.

![](/blog/2020/05/25/increase-revenue-by-accepting-payment-instalments-with-affirm/affirm-promotion-cart-html.png)
`app/views/spree/products/_cart_form.html.erb`

Refresh the page and visit a product detail page and voila:

![](/blog/2020/05/25/increase-revenue-by-accepting-payment-instalments-with-affirm/product-detail-page-with-affirm.png)

When the customer clicks the 'Prequalify now' link, they will get a popup window that shows all the options:

![](/blog/2020/05/25/increase-revenue-by-accepting-payment-instalments-with-affirm/affirm-payment-options-popup.png)

Note that is this sample we only see 2 options, this is because the amount is too low for 12 months terms.

When checking out there is an option now to use Affirm:

![](/blog/2020/05/25/increase-revenue-by-accepting-payment-instalments-with-affirm/checkout-payment-step-affirm.png)

When the customer clicks save and continue they will be redirected to Affirm to complete the payment there.

When completed with Affirm and confirmed on the Solidus storefront the payment information will show up in the admin (after capturing) like so:

![](/blog/2020/05/25/increase-revenue-by-accepting-payment-instalments-with-affirm/admin-payment-completed-affirm.png)

When clicking on the payment identifier link you can see more details:

![](/blog/2020/05/25/increase-revenue-by-accepting-payment-instalments-with-affirm/admin-payment-details-affirm.png)

More information and documentation can be found with the following links:

- [Affirm Merchant](https://www.affirm.com/business)
- [Official Solidus Affirm Extension](https://github.com/solidusio/solidus_affirm)
- [Affirm V2 Extension](https://github.com/solidusio-contrib/solidus_affirm_v2)
- [Solidus Customizations Guide](https://guides.solidus.io/developers/customizations/overview.html)
- [Affirm Promotion Messages](https://docs.affirm.com/affirm-developers/docs/promo-messaging-getting-started)
