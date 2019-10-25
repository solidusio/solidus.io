module Solidus
  module Extensions
    module CircleCi
      class Build < AbstractBuild
        attr_reader :project, :id, :circleci_build

        def initialize(project, id)
          @project = project
          @id = id
          @circleci_build = ::CircleCi::Build.new(
            project.repo_org,
            project.repo_name,
            nil,
            id,
          ).get.body
        end

        def name
          circleci_build['build_parameters']['CIRCLE_JOB']
        end

        private

        def test_runs
          @test_runs ||= circleci_build['steps'].map { |step_data| TestRun.new(step_data) }
        end
      end
    end
  end
end
