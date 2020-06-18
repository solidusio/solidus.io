module Solidus
  module Extensions
    class AbstractProject
      BRANCH = 'master'

      attr_reader :extension

      delegate :repo, :repo_org, :repo_name, to: :extension

      def initialize(extension)
        @extension = extension
      end

      def build_statuses(versions:)
        @build_statuses ||= versions.map do |version|
          test_runs = last_build_group.test_runs_for(solidus_version: version)
          status = test_run_status_for(test_runs)
          url = last_build_group.url

          [version, {
            status: status,
            url: url,
          }]
        end.to_h
      end

      private

      def last_build_group
        @last_build_group ||= branch_klass.new(self, BRANCH).last_build_group
      end

      def branch_klass
        self.class.name.deconstantize.constantize.const_get('Branch')
      end

      def test_run_status_for(test_runs)
        if test_runs.none?
          :unsupported
        elsif test_runs.any?(&:pending?)
          :pending
        elsif test_runs.all?(&:passed?)
          :passed
        else
          :failed
        end
      end
    end
  end
end
