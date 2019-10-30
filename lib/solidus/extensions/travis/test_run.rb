module Solidus
  module Extensions
    module Travis
      class TestRun < AbstractTestRun
        def solidus_version
          run_data.config['env'][/SOLIDUS_BRANCH=(\S+)/, 1]
        end

        def status
          if run_data.passed?
            :passed
          elsif run_data.pending?
            :pending
          else
            :failed
          end
        end
      end
    end
  end
end
