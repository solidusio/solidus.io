require 'rouge'

###
# Page options, layouts, aliases and proxies
###

activate :blog do |blog|
  blog.prefix = "blog"
  blog.layout = "blog_layout"
  blog.paginate = true
end

page "/feed.xml", layout: false

set :markdown_engine, :kramdown
set :markdown, input: 'GFM', hard_wrap: false

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }
set :partials_dir, 'partials'
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :fonts_dir, 'fonts'

# Sync to S3
activate :s3_sync do |s3_sync|
  s3_sync.bucket = ENV["AWS_BUCKET"]
  s3_sync.region = ENV["AWS_REGION"]
  s3_sync.aws_access_key_id = ENV["AWS_ACCESS"]
  s3_sync.aws_secret_access_key = ENV["AWS_SECRET"]
end

default_caching_policy max_age: (60 * 60 * 24 * 365)
caching_policy 'text/html', max_age: 0, must_revalidate: true
caching_policy 'application/xml', max_age: 0, must_revalidate: true

# Build-specific configuration
configure :build do
  set :sass, {
    style: :compressed,
    line_comments: false
  }

  ignore "style-guide.html.erb"

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  #activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
