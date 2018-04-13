page "/*.xml", layout: false
page "/*.json", layout: false
page "/*.txt", layout: false
page "/404.html", directory_index: false

set :css_dir, "assets/stylesheets"
set :images_dir, "assets/images"
set :js_dir, "assets/javascripts"
set :base_url, build? ? "https://solidus.io" : "http://localhost:4567"

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
  blog.paginate = true
  blog.per_page = 10

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

# Sync to S3
activate :s3_sync do |s3_sync|
  s3_sync.bucket = ENV["AWS_BUCKET"]
  s3_sync.region = ENV["AWS_REGION"]
  s3_sync.aws_access_key_id = ENV["AWS_ACCESS"]
  s3_sync.aws_secret_access_key = ENV["AWS_SECRET"]
end

configure :development do
  config[:contact_url] = "http://localhost:4567/contact"
end

configure :build do
  # Append a hash to asset urls (make sure to use the url helpers)
  activate :asset_hash, ignore: [%r{^blog}]

  config[:contact_url] = "https://formspree.io/xywvpjlx"

  ignore "2012-01-01-example-article.html.markdown"
end
