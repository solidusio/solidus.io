page "/*.xml", layout: false
page "/*.json", layout: false
page "/*.txt", layout: false
page "/404.html", directory_index: false

set :css_dir, "assets/stylesheets"
set :images_dir, "assets/images"
set :js_dir, "assets/javascripts"

activate :blog do |blog|
  blog.layout = 'blog'
  blog.prefix = 'blog'
  blog.tag_template = 'blog/tag.html'
  blog.calendar_template = 'blog/calendar.html'
  blog.year_template = 'blog/calendar.html'
  blog.month_template = 'blog/calendar.html'
  blog.day_template = 'blog/calendar.html'
  blog.summary_length = 450
  blog.summary_separator = '%%READMORE%%'
  blog.default_extension = '.erb'

  # Whether to generate day pages.
  blog.generate_day_pages = false
  # Whether to generate month pages.
  blog.generate_month_pages = false
  # Whether to generate tag pages.
  blog.generate_tag_pages = false
  # Whether to generate year pages.
  blog.generate_year_pages = false
end

activate :directory_indexes

activate :external_pipeline,
         name: :webpack,
         command: build? ?  "npm run production" : "npm run development",
         source: ".tmp",
         latency: 1

configure :build do
  # Append a hash to asset urls (make sure to use the url helpers)
  activate :asset_hash

  ignore "assets/javascripts/common.js"
  ignore "assets/stylesheets/site"
end
