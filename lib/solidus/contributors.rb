# frozen_string_literal: true

require 'set'

module Solidus
  class Contributors < SortedSet
    def add(hash_or_array)
      objects = if hash_or_array.is_a?(Array)
                  hash_or_array
                else
                  [hash_or_array]
                end

      objects.compact.each do |object|
        contributor = Contributor.new(
          login: object.login,
          avatar_url: object.avatar_url
        )

        if include?(contributor)
          existing_contribution = find { |c| c.eql? contributor }
          existing_contribution.contributions_count += 1
        else
          super(contributor)
        end
      end

      self
    end
    alias :<< :add
  end
end
