require 'travis'

require_relative 'travis/branch'
require_relative 'travis/build'
require_relative 'travis/project'
require_relative 'travis/test_run'
require_relative 'travis/build_group'

Travis.access_token = ENV['TRAVIS_TOKEN']
