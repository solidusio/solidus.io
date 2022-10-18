---
title: Add Venmo To Your Solidus Store
date: 2022-02-03
tags: Solidus, PayPal, Venmo, Payment Extensions
author: Ryan Woods
cover_image: /blog/2022/02/03/add-venmo-to-your-solidus-store/cover.jpg
description: >
  Venmo, the last payment addition to solidus_paypal_braintree or solidus_paypal_commerce_platform. Learn how to add it to your Solidus store.
---

PayPal has contributed to Solidus massively over the last few years, helping us revitalize both `solidus_paypal_commerce_platform` and `solidus_paypal_braintree` extensions. Entering into the next PayPal phase that we promised, we are excited that both extensions now support Venmo!

This latest addition to their SDK and Braintree allows another streamlined payment option for your customers at no additional cost.

Having multiple finance options is vital as it allows for a higher conversion rate. As well as this, Venmo offers some unique features.

### What is Venmo?
Venmo allows customers to make payments in a mobile app effortlessly, and uniquely, the buyer has the <a href="https://help.venmo.com/hc/en-us/articles/217532327-Splitting-Sharing-Purchases" target="_blank" rel=”noreferrer”>option to split or share the purchase</a>.

It is currently available to only US PayPal merchants and buyers. However, with its recent rise, **every 1 in 5** US citizens already use it each year.

If you meet the <a href="https://developer.paypal.com/docs/business/checkout/pay-with-venmo/#eligibility" target="_blank" rel=”noreferrer”>eligibility requirements</a> you can integrate Venmo into your store where buyers will gain the following experiences:

#### Mobile checkout:
<ol>
  <li>Buyer clicks the Venmo button and their mobile device switches to the Venmo app.</li>
  <li>Buyer sees a payment review on the Venmo app and completes it.</li>
  <li>Buyer gets switched back to your website to complete the payment.</li>
</ol>

<figure>
  <img src="/blog/2022/02/03/add-venmo-to-your-solidus-store/venmo-mobile-flow.png"
       alt="Venmo checkout process on mobile">
  <figcaption>Venmo checkout process on mobile.</figcaption>
</figure>

#### Desktop checkout:
<ol>
  <li>Buyer clicks the Venmo button on the desktop to generate a QR code.</li>
  <li>Buyer scans the QR code from the Venmo mobile app.</li>
  <li>Buyer completes the payment review on the Venmo app.</li>
  <li>Buyer completes the payment by the website on desktop.</li>
</ol>

<figure>
  <img src="/blog/2022/02/03/add-venmo-to-your-solidus-store/venmo-desktop-flow.png"
       alt="Venmo checkout process on desktop">
  <figcaption>Venmo checkout process on desktop.</figcaption>
</figure>

*Simple!*

### How to integrate Venmo?
If you don't have <a href="https://github.com/solidusio/solidus_paypal_braintree#installation" target="_blank">solidus\_paypal\_braintree</a> or <a href="https://github.com/solidusio-contrib/solidus_paypal_commerce_platform#installation" target="_blank">solidus\_paypal\_commerce\_platform</a> installed and setup already - do that first and then continue with the integration. <a href="https://solidus.io/blog/2020/11/24/using-paypal-with-solidus.html" target="_blank">Unsure which to install?</a>

#### SolidusPaypalBraintree
For this extension, Venmo is accessible to your payment page by two ways:
1. Braintree native Venmo integration; and
2. Enabling Venmo as a funding source/finance option on your PayPal buttons if you are using "checkout" `paypal_flow`.

The benefit of the native Braintree integration is that it supports vaulting unlike Venmo as a funding source.

First, update the extension by running `bundle upgrade --conservative solidus_paypal_braintree`.

##### Native Braintree Venmo integration
<ol>
  <li>Enable Venmo in your <a href="https://developer.paypal.com/braintree/articles/guides/payment-methods/venmo#setup" target="_blank" rel=”noreferrer”>Braintree account</a>(sandbox and production).</li>
  <li>Enable Venmo in the admin panel:</li>
  <ol type="a">
    <li>Click `Braintree`.</li>
    <li>Tick `Venmo`.</li>
    <li>Click `Update`.</li>
  </ol>
  <li>Ensure the `_venmo_button.html.erb` partial is being rendered appropriately.</li>
</ol>

If your store is a SPA or uses this on checkout, you may need to set your Braintree payment method `venmo_new_tab_support` preference to `false`.

##### Venmo as a PayPal funding option
If PayPal is enabled already and you are using the "checkout" `paypal_flow`. The Braintree store PayPal messaging preference must be set to `false` for Venmo to be available.

<ol>
  <li>Go to the admin panel.</li>
  <li>Click `Settings` > `Payments`.</li>
  <li>Click the edit icon on your `Solidus PayPal Braintree` payment method.</li>
  <li>Tick the `Enable venmo funding` checkbox.</li>
  <li>Click `Update`.</li>
</ol>

#### SolidusPaypalCommercePlatform
First, update the extension by running `bundle upgrade --conservative solidus_paypal_commerce_platform`.

<ol>
  <li>Go to the admin panel.</li>
  <li>Click `Settings` > `Payments`.</li>
  <li>Click the edit icon on your `Solidus PayPal Braintree` payment method.</li>
  <li>Set `Venmo standalone` to:</li>
  <ol type="a">
    <li>`enabled` (adds the Venmo button under other PayPal funding sources); or</li>
    <li>`render only standalone` (only shows the Venmo button and hides other PayPal funding sources - only recommended when you only have US customers).</li>
  </ol>
  <li>Untick `Display credit messaging` (must be disabled for Venmo to be available).</li>
  <li>Click `Update`.</li>
</ol>

#### Integrated!
You should now see a Venmo button on the payment page! Either with other PayPal buttons or on its own depending on your extension and integration choice.

<figure>
  <img src="/blog/2022/02/03/add-venmo-to-your-solidus-store/venmo-button.png"
       alt="Venmo checkout button">
  <figcaption>Venmo checkout button</figcaption>
</figure>

### Testing Venmo
We recommend testing all of the following. Ensure that:
<ul>
  <li>the Venmo checkout button opens a modal;</li>
  <li>you can do a full transaction on checkout (see below);</li>
  <li>you can void and refund Venmo transactions; and</li>
  <li>if you are using the native Braintree Venmo integration:</li>
  <ul>
    <li>you can save the payment source to a user's wallet;</li>
    <li>saved Venmo wallet payment sources appear correctly; and</li>
    <li>saved Venmo payment sources can be reused for another order.</li>
  </ul>
</ul>

#### Testing a full transaction when Venmo is a PayPal funding source:
By default, PayPal looks at the buyer's IP geolocation to determine whether Venmo should be available. However, you may want to mock your country to test the Venmo integration.
Thanks to the new `force_buyer_country` preference available to both extension's `Payment Method`, this is simple:
<ol>
  <li>Go to your extension's payment method's preferences</li>
  <li>Set the `force buyer country` preference to any <a href="https://developer.paypal.com/docs/business/javascript-sdk/javascript-sdk-configuration/#locale" target="_blank" rel=”noreferrer”>country code that PayPal allows</a>; such as "US" or "IT".</li>
  <li>Click the `Update` button.</li>
</ol>

_This preference has no effect on production._

#### Testing a full transaction with Braintree's native Venmo integration:
You'll need the Venmo app in order to fully test the integration. However, if you are outside of the US, this is not an option. You can fake the tokenization by:
<ul>
  <li>Altering the `venmo_button.js` file to call the `handleVenmoSuccess` function instead of tokenizing and inserting the fake nonce appropriately; or</li>
  <li>Manually:</li>
  <ol>
    <li>Update the `#venmo_payment_method_nonce` hidden input value to "fake-venmo-account-nonce".</li>
    <li>Remove the `disabled` attribute from each `.venmo-fields` input.</li>
    <li>If you have enabled Credit Cards (hosted fields):</li>
    <ol type="a">
      <li>Add the `disabled` attribute to each `.hosted-fields` input.</li>
      <li>Remove its submit button listener: `$('#checkout_form_payment').off('submit')`.</li>
    </ol>
  </ol>
</ul>

### The Future
Thanks to PayPal and Braintree SDK additions and continued support to Solidus and extensions, you will continue to see new exciting features soon! So stay tuned and continue building your incredible Solidus store!
