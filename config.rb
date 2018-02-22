activate :directory_indexes

set :relative_links, true

# Disable Haml warnings
Haml::TempleEngine.disable_option_validator!

page "/*.xml", layout: false
page "/*.json", layout: false
page "/*.txt", layout: false
page "/404.html", directory_index: false

set :css_dir, "assets/stylesheets"
set :images_dir, "assets/images"
set :js_dir, "assets/javascripts"

activate :external_pipeline,
         name: :webpack,
         command: build? ?  "npm run production" : "npm run development",
         source: ".tmp",
         latency: 1

configure :build do
  # Append a hash to asset urls (make sure to use the url helpers)
  activate :asset_hash

  ignore "assets/javascripts/all.js"
  ignore "assets/stylesheets/site"
end
