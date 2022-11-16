Based on [https://github.com/joshukraine/middleman-gulp](https://github.com/joshukraine/middleman-gulp)

Requirements
------------

* [Middleman 4.x](https://middlemanapp.com/)
* [Ruby 2.7.1](https://www.ruby-lang.org)
* [Node 14](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/)
* [Gulp CLI](https://www.npmjs.com/package/gulp-cli)

Usage
-----

1. Install ruby gems `bundle install`

2. Install yarn packages `yarn install --check-files`

3. Start the Middleman server. Note that this will also invoke Webpack via the external pipeline.

        $ bin/middleman server

4. To build html and assets for production, run

        $ bin/middleman build

Or use the available docker-compose environment:

```bash
docker-compose up -d
docker-compose exec app bin/middleman server --bind-address 0.0.0.0
```

Installing Ruby 2.7.1 on newer M1 Mac OS
----------------------------------------

Plain `rbenv install 2.7.1` will fail building on newer Macs.
To install, you need to use the following command instead:

`RUBY_CFLAGS=-DUSE_FFI_CLOSURE_ALLOC arch -arm64 rbenv install 2.7.1`
