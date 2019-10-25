module Solidus
  module Extensions
    module Travis
      class Build < AbstractBuild
        def initialize(project, build)
          @project = project
          @build = build
        end

        def url
          "https://travis-ci.org/#{@project.repo}/builds/#{@build.id}"
        end

        private

        def test_runs
          @test_runs ||= @build.jobs.map { |job| TestRun.new(job) }
        end
      end
    end
  end
end
