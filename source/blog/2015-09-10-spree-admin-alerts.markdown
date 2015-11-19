---
title: Spree Admin broken by alerts
date: 2015-09-10
tags: spree, admin
author: John Hawthorn
---

Using an old version of Spree? Admin down right now? You're probably encountering an issue with the alert system.

In Spree, requests to the admin "phone home" to `alerts.spreecommerce.com`. Due to changes made to that domain in the last day requests to the admin now hang, never returning a response.

Fortunately, there's a quick workaround. Add the following to an initializer and restart your app servers. This will disable alerts entirely.

```
# config/initializers/spree.rb
Spree.config do |config|
  config.check_for_spree_alerts = false
end
```

I urge Spree Commerce to move this domain to a static, empty s3 bucket to avoid stores having issues.

This system was [removed in Solidus](https://github.com/solidusio/solidus/commit/18c4132161ab3ead5a826270a3c3a11c0546670a){: target="_blank"} shortly after the fork.
