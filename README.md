# Solidus Marketing Site

A simple one-pager that explains who we are, what Solidus is and why we've created it.

## Development

To make changes to the site pull it down and run `bundle`. Start up a local server:

    bundle exec middleman server

### Icons

We are using a custom build of [Fontello](http://fontello.com/) which is
described by [fontello.json][1]. We are using [railslove/fontello_rails_converter][2]
to update/convert the fontello assets to SCSS.

The current glyph set can be seen at http://localhost:4567/fontello-demo.html.

#### To Update Fontello

1. `sh bin/fontello_open.sh` to open our custom glyph set in the Fontello web app.
2. Change selected glyphs as needed and save your session.
3. `sh bin/fontello_convert.sh` to fetch those changes and update vendor assets.

## Style Guide

Not sure how a component should be marked up? Check out the [style guide](http://localhost:4567/style-guide.html) first. Start up a server and navigate to `/style-guide.html`.

[1]: https://github.com/solidusio/solidus-site/blob/master/data/fontello.json
[2]: https://github.com/railslove/fontello_rails_converter
