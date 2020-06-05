# frozen_string_literal: true

require_relative 'version'

module Solidus
  class Versions
    class << self
      def from_yaml_data(data)
        data['versions'].map do |version_attributes|
          Version.new(version_attributes.transform_keys(&:to_sym))
        end
      end
    end
  end
end
