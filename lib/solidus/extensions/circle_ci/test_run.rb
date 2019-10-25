module Solidus
  module Extensions
    module CircleCi
      class TestRun < AbstractTestRun
        def solidus_version
          run_data['name'].gsub('Runs tests on Solidus ', '')
        end

        def status
          case run_data['actions'].first['status']
          when 'success'
            :passed
          when 'fixed'
            :passed
          when 'running'
            :pending
          when 'queued'
            :pending
          when 'scheduled'
            :pending
          else
            :failed
          end
        end
      end
    end
  end
end
