module Solidus
  module Extensions
    class AbstractBuildGroup
      attr_reader :builds, :options

      def initialize(builds, options = {})
        @builds = builds
        @options = options
      end

      def test_runs_for(solidus_version:)
        builds.map do |build|
          build.test_runs_for(solidus_version: solidus_version)
        end.flatten
      end
    end
  end
end
