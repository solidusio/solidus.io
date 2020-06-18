# frozen_string_literal: true

module Solidus
  class Version
    class << self
      def collection_from_yaml_data(data)
        data['versions'].map do |version_attributes|
          new(version_attributes.transform_keys(&:to_sym))
        end
      end
    end

    attr_reader :number, :release_date, :eol_date

    def initialize(number:, release_date: nil, eol_date: nil)
      @number = number
      @release_date = release_date
      @eol_date = eol_date
    end

    def supported?
      eol_date >= Date.today
    end
  end
end
