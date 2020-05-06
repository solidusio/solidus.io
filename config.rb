page "/*.xml", layout: false
page "/*.json", layout: false
page "/*.txt", layout: false
page "/404.html", directory_index: false

set :css_dir, "assets/stylesheets"
set :images_dir, "assets/images"
set :js_dir, "assets/javascripts"

set :seo_title, "Solidus: Rails Ecommerce Platform"
set :seo_description, "Build, customize and scale your store with no limits or license fees. Solidus is the free, open-source eCommerce framework for digitally-native brands, fast-growing online businesses and pragmatic developers."

redirect "developers.html", to: "community.html"

activate :syntax

set :markdown_engine, :redcarpet

set :markdown, fenced_code_blocks: true

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
page 'blog/*', :directory_index => false

activate :external_pipeline,
         name: :webpack,
         command: build? ?  "npm run production" : "npm run development",
         source: ".tmp",
         latency: 1

configure :development do
  config[:contact_url] = "http://localhost:4567/contact"
end

configure :build do
  # Append a hash to asset urls (make sure to use the url helpers)
  activate :asset_hash, ignore: [%r{^blog}]

  activate :minify_css

  ignore "2012-01-01-example-article.html.markdown"
end

helpers do
  def preview_image_path
    current_page.data.cover_image || # Blog post cover images do not need the hash appended
      image_path(current_page.data.preview_image || 'social_preview.jpg')
  end

  def base_url
    return "http://localhost:4567" unless build?
    return "https://solidus.io" unless ENV['NETLIFY']

    ENV['CONTEXT'] == 'production' ? ENV['URL'] : ENV['DEPLOY_PRIME_URL']
  end
end

import_file File.expand_path('source/_redirects', root), '/_redirects'
