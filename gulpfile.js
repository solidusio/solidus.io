// gulpfile.js - https://jsua.co/mm-gulp

'use strict'; // http://www.w3schools.com/js/js_strict.asp

// 1. LOAD PLUGINS
var gulp = require('gulp');
var p = require('gulp-load-plugins')({ // This loads all the other plugins.
  DEBUG: false,
  pattern: ['gulp-*', 'gulp.*', 'del', 'run-*', 'browser*', 'vinyl-*'],
  rename: {
    'vinyl-source-stream': 'source',
    'vinyl-buffer': 'buffer',
    'gulp-util': 'gutil'
  }
});

// 2. CONFIGURATION

var
  src  = 'source/', // The Middleman source folder
  dest = '.tmp/',   // The "hot" build folder used by Middleman's external pipeline

  development = p.environments.development,
  production = p.environments.production,

  css = {
    in: src + 'assets/stylesheets/**/*.{css,scss,sass}',
    out: dest + 'assets/stylesheets/'
  },

  sassOpts = {
    imagePath: '../assets/images',
    includePaths: [
        "node_modules/bootstrap"
    ],
    errLogToConsole: true
  },

  js = {
    in: src + 'assets/javascripts/*.{js,coffee}',
    out: dest + 'assets/javascripts/'
  },

  uglifyOpts = {
    output: {
      comments: 'uglify-save-license'
    }
  },

  images = {
    in: src + 'assets/images/*',
    out: dest + 'assets/images/'
  };

// 3. WORKER TASKS

// CSS Preprocessing
gulp.task('css', function() {
  return gulp.src(css.in)
    .pipe(development(p.sourcemaps.init()))
    .pipe(p.sass(sassOpts).on('error', p.sass.logError))
    .pipe(p.autoprefixer()).on('error', handleError)
    .pipe(production(p.cleanCss()))
    .pipe(development(p.sourcemaps.write()))
    .pipe(gulp.dest(css.out));
});

// Javascript Bundling
gulp.task('js', function() {

});

// Image Optimization
gulp.task('images', function() {
  return gulp.src(images.in)
    .pipe(p.changed(images.out))
    .pipe(gulp.dest(images.out));
});

// Clean .tmp/
gulp.task('clean', function() {
  p.del([
    dest + '*'
  ]);
});

// 4. SUPER TASKS

// Development Task
gulp.task('development', function(done) {
  p.runSequence('clean', 'css', 'js', 'images', done);
});

// Production Task
gulp.task('production', function(done) {
  p.runSequence('clean', 'css', 'js', 'images', done);
});

// Default Task
// This is the task that will be invoked by Middleman's exteranal pipeline when
// running 'middleman server'
gulp.task('default', ['development'], function() {

  p.browserSync.init({
    proxy: 'localhost:4567',
    open: false,
    reloadDelay: 700,
    files: [dest + '**/*.{js,css,html}', src + '**/*.{html,erb,markdown}']
  });

  gulp.watch(css.in, ['css']);
  gulp.watch(js.in, ['js']);
  gulp.watch(images.in, ['images']);
});

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}
