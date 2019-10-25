require 'circleci'

require_relative 'circle_ci/branch'
require_relative 'circle_ci/build'
require_relative 'circle_ci/project'
require_relative 'circle_ci/test_run'
require_relative 'circle_ci/build_group'

CircleCi.configure { |config| config.token = ENV['CIRCLECI_TOKEN'] }
