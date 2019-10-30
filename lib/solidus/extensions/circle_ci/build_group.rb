module Solidus
  module Extensions
    module CircleCi
      class BuildGroup < AbstractBuildGroup
        def url
          "https://circleci.com/workflow-run/#{options[:workflow_id]}"
        end
      end
    end
  end
end
