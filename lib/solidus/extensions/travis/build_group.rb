module Solidus
  module Extensions
    module Travis
      class BuildGroup < AbstractBuildGroup
        def url
          builds.first.url
        end
      end
    end
  end
end
