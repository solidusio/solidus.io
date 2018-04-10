---
title: Version Maintenance/EOL policy
tags: EOL, security
author: John Hawthorn
---

Previously, Solidus didn't have an explicit maintenance policy for previous
versions. We're very security conscious, so for each previous security
release we've released a patch simultaneously for all previous minor versions.

As we've released more versions, this has become more difficult. Our last set
of security patches (December 2017) required 10 new releases, which is way too
many. However we don't want to surprise users by announcing an issue with no
easy patch available to them.

To allow us to patch security issues promptly, and to make sure developers know
how long their Solidus version will receive security updates, we're introducing
the following End of Life policy:

Solidus versions will receive security patches for 18 months following their
initial release.

Versions which would hit their EOL before May 5th, 2018 (4 months from the date of this announcement) will receive security patches until May 5th, 2018. This applies to Solidus 1.0 through 2.0.

Under this policy, versions will be supported until the following dates:

| Version |   Release   |     EOL     |
|---------|-------------|-------------|
|     1.0 |  2015-08-11 |  2018-05-05 |
|     1.1 |  2015-11-25 |  2018-05-05 |
|     1.2 |  2016-01-26 |  2018-05-05 |
|     1.3 |  2016-06-22 |  2018-05-05 |
|     1.4 |  2016-09-26 |  2018-05-05 |
|     2.0 |  2016-09-26 |  2018-05-05 |
|     2.1 |  2017-01-17 |  2018-07-17 |
|     2.2 |  2017-05-01 |  2018-11-01 |
|     2.3 |  2017-07-31 |  2019-01-31 |
|     2.4 |  2017-11-07 |  2019-05-07 |

<img src="/blog/2018/01/04/maintenance-eol-policy/chart.png" class="no-box" />
