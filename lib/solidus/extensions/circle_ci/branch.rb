module Solidus
  module Extensions
    module CircleCi
      class Branch < AbstractBranch
        def last_build_group
          return @last_build_group if @last_build_group

          last_builds = client.recent_builds_branch(name, limit: 4).body
          builds_grouped_by_workflow = last_builds.group_by { |build| build["workflows"]["workflow_id"] if build && build.key?("workflows") }
          last_complete_workflow = builds_grouped_by_workflow.find do |_id, builds|
            job_names = builds.map { |build| build['workflows']['job_name'] }
            job_names.include?('run-specs-with-mysql') && job_names.include?('run-specs-with-postgres')
          end
          builds = last_complete_workflow[1].map { |build_data| Build.new(project, build_data["build_num"]) }
          mysql_build = builds.find { |build| build.name == 'run-specs-with-mysql' }
          postgres_build = builds.find { |build| build.name == 'run-specs-with-postgres' }

          @last_build_group = BuildGroup.new([mysql_build, postgres_build], workflow_id: last_complete_workflow[0])
        end

        private

        def client
          ::CircleCi::Project.new(project.repo_org, project.repo_name)
        end
      end
    end
  end
end
