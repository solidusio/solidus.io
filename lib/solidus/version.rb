# frozen_string_literal: true

module Solidus
  class Version
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
