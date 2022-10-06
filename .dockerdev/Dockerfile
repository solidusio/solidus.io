ARG RUBY_VERSION
FROM ruby:$RUBY_VERSION-slim-buster

ARG NODE_VERSION
ARG BUNDLER_VERSION

RUN apt-get update -qq \
  && DEBIAN_FRONTEND=noninteractive apt-get install -yq --no-install-recommends \
    build-essential \
    python2 \
    curl \
    git \
  && rm -rf /var/cache/apt/lists/*

RUN curl -sSL https://deb.nodesource.com/setup_$NODE_VERSION.x | bash -

RUN apt-get update -qq && DEBIAN_FRONTEND=noninteractive apt-get -yq dist-upgrade && \
  DEBIAN_FRONTEND=noninteractive apt-get install -yq --no-install-recommends \
    nodejs \
  &&  rm -rf /var/lib/apt/lists/*

RUN npm install --global gulp-cli yarn

ENV APP_USER=solidusio_user \
    LANG=C.UTF-8 \
    BUNDLE_JOBS=4 \
    BUNDLE_RETRY=3
ENV GEM_HOME=/home/$APP_USER/gems
ENV APP_HOME=/home/$APP_USER/app
ENV PATH=$PATH:$GEM_HOME/bin

RUN useradd -ms /bin/bash $APP_USER

RUN gem update --system \
  && gem install bundler:$BUNDLER_VERSION \
  && chown -R $APP_USER:$(id -g $APP_USER) /home/$APP_USER/gems

USER $APP_USER

RUN mkdir -p /home/$APP_USER/history

WORKDIR /home/$APP_USER/app
