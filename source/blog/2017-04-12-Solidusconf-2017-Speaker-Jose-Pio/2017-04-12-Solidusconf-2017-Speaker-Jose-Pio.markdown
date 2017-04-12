---
title: SolidusConf 2017 Speaker Jose Pio 
date: 2017-04-11 00:00 UTC
author: Gregor MacDougall 
---

![SolidusConf Speaker Jose Pio](2017-04-12-Solidusconf-2017-speaker-jose-pio.jpg)

**Please give us a quick introduction to yourself for those who don’t know you**

My name is Jose Pio. I’ve studied Electronic Engineering and during my career I became more interested in the web world. So now I continue in this area. I'm a Senior/Full Stack Dev at Bitspire. I've been working with Ruby for 6 years now and before I was working mostly with PHP.

**How long have you been working with Spree and Solidus?**

I started working with websites in 2001 at Actionscript, Indeed and HTML 1. The last year and a half I’ve been assisting with the Payone gem integration and now I work full time on two stores: [Best Made Co](http://bestmadeco.com) and [Othr](https://www.othr.com). BestmadeCo is still Spree but Othr was migrated to Solidus. I've also been working on developing the Gem for integrating Klarna Payments to Solidus 1.x. 

**You mentioned that you're a full stack dev? What sort of things do you do on an average day at work?**

So far I normally go from solving issues in servers and revising Chef deployment scripts, to fixing silly bugs in CSS. Fixing the bugs is not my favourite part but sometimes you have to do it. This last year I spent most of the time making Spree/Solidus modifications for clients.

**Can you give us an overview of what you're going to be speaking about at SolidusConf?**

After working with Klarna Payment Gateway and Payone, I realized that a fair introduction to payments in Solidus would improve the process of this integration. I had to read the models back and forth and use a railroady gem to analyze the structure of the code, so I thought I would give a fair introduction to the topic for people who want to modify or create new integrations. 

**It's a challenging topic, but something lots of us have to deal with. What were some of those most challenging things you ran into along the way?**

Well first, why Active Merchant? We could implement both of our integrations without it, but still we respect the API. Then I understood that it is that respect that brings coherence to the whole payment design. Also it was challenging to see at first sight this magic of "I press purchase" and then my credit card or in our last case "Klarna API" receives the request. So we needed to divide the design into a Gateway and SDK and join them to work into Solidus. It was very challenging testing the suits, the error bubbling and responses.

**I’m not sure about everyone else, but I know exactly what you're speaking of**

Yup, I also know that you know because I had to read a lot of code from you including the Reimbursement in StoreCredits that in Spree is a Gem and in Solidus in part of the core. 

**We're a bit spoiled these days with payment gateways that offer reasonable support, documentation, and even a gem to help work with them**

In the project I'm working on now I had to use your code again. 

**I used to be impressed by someone who gave me documentation in a PDF that was in the same language I spoke...**

Well that is the intention for Klarna, they want their Gem to be fully compatible. 

**What are you looking forward to most at SolidusConf?**

I'm very exited that I can speak at the conference. My last conference was many years ago in Spain. I'm really glad that I can collaborate and spread knowledge to people, I haven't been able to make any coherent big commit to the project but I can probably give my two cents on explaining this payment labyrinth. 

**It should be interesting and I'm looking forward to it! Outside of the conference itself is there anything you're planning to do in London?**

Besides this contributing motivation I think getting to know most of the people I'm reading code from is an awesome opportunity. I have to be back in Berlin on Friday afternoon so so far, I've only planned from the conference. I also have a 5 month old baby I need to come back to and keep helping with. You can call it a "never ending pull request”. 

**I’m sure that keeps you very busy!**

Yes it also keeps me smiling a lot. 

**Is there anything else you wanted to mention before we wrap up?**

I'm very glad for the opportunity and thanks for letting me collaborate. 

**You're welcome. Thanks for taking the time to chat with me today!**

**Learn more about the conference at [http://conf2017.solidus.io/](http://conf2017.solidus.io/)**
