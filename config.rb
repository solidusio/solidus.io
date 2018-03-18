set :relative_links, true

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
