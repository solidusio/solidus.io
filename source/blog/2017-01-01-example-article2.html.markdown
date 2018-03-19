---
title: Example Article 2
date: 2017-01-01
author: Solidus Core Team
---

This is an example article. You probably want to delete it and write your own articles!
This will then link to the article, where READMORE (or the text you have configured the extension to match on) will be removed.

%%READMORE%%

You can use the summary in templates from the summary attribute of a BlogArticle.

summary can also take an optional length to chop summaries down to, and a string to use when the text is truncated:


This would produce a summary of no more than 250 characters, followed by ">>". The default summary length is 250 characters - if you wish to disable this entirely, set blog.summary_length to nil.

Note that, in order to provide HTML-aware summaries, you must add gem 'nokogiri' to your Gemfile. This gem is not needed if you're using the summary_separator (READMORE) feature and not the optional length parameter.

If you have your own method of generating summaries, you can set blog.summary_generator to a Proc that takes the rendered blog post, desired length, and ellipsis string and produces a summary.