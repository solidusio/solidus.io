module Solidus
  module Extensions
    module Fake
      class Project < AbstractProject
        def build_statuses(versions:)
          versions.map do |version|
            [version, {
              status: %i[passed failed pending unsupported].sample,
              url: '#',
            }]
          end.to_h
        end
      end
    end
  end
end
