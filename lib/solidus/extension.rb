module Solidus
  class Extension
    VERSIONS = %w[v2.6 v2.7 v2.8 v2.9 master].freeze

    attr_accessor :repo, :title, :ci_provider, :description, :group, :environment

    class << self
      def from_yaml_data(data, environment:)
        data.map do |repo, config|
          new(config.merge(
            repo: repo,
            environment: environment
          ).transform_keys(&:to_sym))
        end
      end
    end

    def initialize(attributes = {})
      attributes.each_pair do |name, value|
        send("#{name}=", value)
      end
    end

    def repo_org
      repo.split('/').first
    end

    def repo_name
      repo.split('/').last
    end

    def repo_url
      "https://github.com/#{repo}"
    end

    def repo_org_image_url
      "https://github.com/#{repo_org}.png"
    end

    def categories
      case repo_org.to_s
      when 'solidusio'
        ['Official']
      when 'solidusio-contrib'
        ['Community']
      else
        ['Third-Party']
      end
    end

    def ci
      ci_klass.new(self, versions: VERSIONS)
    end

    private

    def ci_klass
      Extensions::Fake::Project
    end
  end
end
