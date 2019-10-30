module Solidus
  module Extensions
    class AbstractBranch
      attr_reader :project, :name

      def initialize(project, name)
        @project = project
        @name = name
      end
    end
  end
end
