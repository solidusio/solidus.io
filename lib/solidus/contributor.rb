# frozen_string_literal: true

module Solidus
  class Contributor
    attr_reader :login, :avatar_url
    attr_accessor :contributions_count

    def initialize(login:, avatar_url:, contributions_count: 1)
      @login = login
      @avatar_url = avatar_url
      @contributions_count = contributions_count
    end

    def <=>(other)
      other.contributions_count <=> contributions_count
    end

    def eql?(other)
      hash == other.hash
    end

    def hash
      login.hash
    end
  end
end
