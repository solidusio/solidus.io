---
title: Customizing Solidus Admin Styles
date: 2015-12-23 02:22 UTC
author: Kevin Attfield
---

The out-of-the-box Solidus admin area looks a little dated (it's something we're [working on](https://github.com/solidusio/solidus/issues/520)) but there are a number of things you can do to customize it. Replacing the logo, changing the colors and overriding styles are easy ways to make it feel like your own.

## Changing the Logo

By default, the Solidus frontend and backend both use the same logo. You can either replace this logo directly with your own or point one or both of them to other image assets in the [spree initializer](https://github.com/solidusio/solidus/blob/master/core/lib/generators/spree/install/templates/config/initializers/spree.rb).

![sweet new solidus logo](2015-12-23-customizing-solidus-admin-styles/solidus_logo.png)

## Changing Colors

Many Solidus styles are controlled by variables. Most of these variables are color related, and they don't always give us the control we would like, but small changes to these values can have drastic impacts on the backend experience.

Solidus provides a hook into the variables in the form of [_variables_override.scss](https://github.com/solidusio/solidus/blob/master/backend/app/assets/stylesheets/spree/backend/globals/_variables_override.scss), which is [Sass imported](http://sass-lang.com/guide#topic-5) before [globals/_variables.scss](https://github.com/solidusio/solidus/blob/master/backend/app/assets/stylesheets/spree/backend/globals/_variables.scss). This file makes extensive use of [Sass !default](https://robots.thoughtbot.com/sass-default). If we add our own `_variables_override.scss` then any variables we define will take precedence over those in Solidus.

Solidus has some (unfortunately named) global colours, which are re-used extensively throughout the admin styles. I like a two step process with my color variables. First I give each colour a self descriptive name.

~~~ scss
// app/assest/stylesheets/spree/backend/globals/_variable_overrides.scss

$black:                          #0C141F;
$cyan:                           #6FC3DF;
$orange:                         #DF740C;
$yellow:                         #FFE64D;

$color-1:                        $black;
$color-2:                        $orange;
$color-3:                        $cyan;
$color-6:                        $yellow;
~~~

Then when establishing/overriding semantically named variables I find it easier to picture the output.

~~~ scss
$color-tbl-even:                 $black;
$color-tbl-thead:                $black;
~~~

Although most variables in this file control colours, the font-family is included, and I'll be doing my best in the future to expand this list with controls for any component you might want to tweak.

~~~ scss
@import url(https://fonts.googleapis.com/css?family=Orbitron);
$base-font-family: "Orbitron", sans-serif;
~~~

## Overriding Styles

At the end of the day, the most powerful tool at our disposal is just writing more css to enhance or modify existing styles. The admin layout includes an `all.css` [which is generated](https://github.com/solidusio/solidus/blob/master/core/lib/generators/spree/install/templates/vendor/assets/stylesheets/spree/backend/all.css) upon solidus install and uses `*= require_tree .` to pull in everything from `vendor/assets/stylesheets/spree/backend/`.

So if we were to add our own stylesheets there (or put a placeholder there and do our actual work in `app` the same way `_variable_overrides.scss` works) we can include any arbitrary styles without having to override any layouts.

We'll start by `@importing` the same variables. When using Sprockets directives, Sass files exist within
their own scope, making variables or mixins only available within the document they were defined.

~~~scss
// vendor/assets/stylesheets/spree/backend/custom.scss

@import 'spree/backend/globals/variables_override';
@import 'spree/backend/globals/variables';
~~~

I would probably organize these styles into separate files and simply `@import` them all. Also, I would prefer establishing semantic variable names in my `_variables_override.scss`, but for expediency let's just make a couple quick changes.

~~~scss
.button {
  background: $color-2;
}

table thead th,
table td,
table th:first-child,
table td:first-child,
table tbody tr:first-child td {
  border-color: $color-1;
}

#content-header {
  background: $color-1;
}
~~~

These selectors were chosen carefully, by inspecting the current styles, or tracing them back to their origins in Solidus so that I could use the least possible [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) and avoid escalating problems in the future.

I imagine Solidus will always use [Bourbon](http://bourbon.io/), but before using any gems in your application code, you'll want to add them to your own gemfile.

~~~scss
@import 'bourbon';

#{$all-text-inputs} {
  background: $color-6;
  border-color: $color-6;
}
~~~

![totally legit rebrand](2015-12-23-customizing-solidus-admin-styles/tron.jpg)
