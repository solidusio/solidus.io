module Solidus
  module Extensions
    class AbstractTestRun
      attr_reader :run_data

      def initialize(run_data)
        @run_data = run_data
      end

      def status
        raise NotImplementedError
      end

      def solidus_version
        raise NotImplementedError
      end

      def passed?
        status.to_sym == :passed
      end

      def failed?
        status.to_sym == :failed
      end

      def pending?
        status.to_sym == :pending
      end
    end
  end
end
