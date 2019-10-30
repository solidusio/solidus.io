module Solidus
  module Extensions
    module Unsupported
      class Project < AbstractProject
        def build_statuses
          versions.map do |version|
            [version, {
              status: :unsupported,
              url: '#',
            }]
          end.to_h
        end
      end
    end
  end
end
