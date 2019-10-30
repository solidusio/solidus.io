module Solidus
  module Extensions
    module Travis
      class Branch < AbstractBranch
        def last_build_group
          @last_build_group ||= BuildGroup.new([Build.new(project, client.branch(name))])
        end

        private

        def client
          ::Travis::Repository.find(project.repo)
        end
      end
    end
  end
end
