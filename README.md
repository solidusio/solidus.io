Based on [https://github.com/joshukraine/middleman-gulp](https://github.com/joshukraine/middleman-gulp)

Requirements
------------

* [Middleman 4.x](https://middlemanapp.com/)
* [Ruby 2.7](https://www.ruby-lang.org)
* [Node 14](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/)
* [Gulp CLI](https://www.npmjs.com/package/gulp-cli)

_Notes_

1. `node-sass` version in use does not support Node 16 or higher. You are advised to install and use Node 14, otherwise `yarn install` will fail._
2. Python 2 is required. We recommend using `pyenv` to install Python 2, then set it as local default. `pyenv install 2.7 && pyenv shell 2.7` should work.

Usage
-----

1. Install ruby gems `bundle install`

2. Install yarn packages `yarn install --check-files`

3. Start the Middleman server. Note that this will also invoke Webpack via the external pipeline.

        $ bin/middleman server
        
   Site will be accessible at http://localhost:4567/ .

4. To build html and assets for production, run

        $ bin/middleman build

Or use the available docker-compose environment:

```bash
docker-compose up -d
docker-compose exec app bin/middleman server --bind-address 0.0.0.0
```
