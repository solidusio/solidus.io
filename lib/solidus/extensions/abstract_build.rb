module Solidus
  module Extensions
    class AbstractBuild
      def name
        raise NotImplementedError
      end

      def test_runs_for(solidus_version:)
        test_runs.select { |step| step.solidus_version == solidus_version }
      end

      private

      def test_runs
        raise NotImplementedError
      end
    end
  end
end
