# frozen_string_literal: true

module Solidus
  class ContributorsPopulator
    attr_accessor :contributors, :organizations, :offset

    def initialize(contributors: Contributors.new,
                   organizations:,
                   offset:)
      @contributors = contributors
      @organizations = organizations
      @offset = offset
    end

    def call
      unless ENV['GITHUB_GRAPHQL_ACCESS_TOKEN']
        stub_contributors
        return
      end

      require_relative '../github/graphql_query_builder'
      organizations.each do |organization|
        response = graphql_query_builder.contributors_for(organization: organization, offset: offset)
        next if response.errors.any?

        repositories = response.data.organization.repositories

        issues = repositories.edges.map(&:node).map(&:issues).flat_map(&:edges).map(&:node)
        issues_authors = issues.map(&:author)
        issues_comments_authors = issues.map(&:comments).flat_map(&:edges).map(&:node).map(&:author)
        pull_requests = repositories.edges.map(&:node).map(&:pull_requests).flat_map(&:edges).map(&:node)
        pull_requests_authors = pull_requests.map(&:author)
        pull_requests_mergers = pull_requests.map(&:merged_by)
        pull_requests_commit_authors = pull_requests.map(&:commits).flat_map(&:edges).map(&:node).map(&:commit).map(&:author).map(&:user)
        pull_requests_comments_authors = pull_requests.map(&:comments).flat_map(&:edges).map(&:node).map(&:author)
        pull_requests_reviews_authors = pull_requests.map(&:reviews).flat_map(&:edges).map(&:node).map(&:author)

        contributors << issues_authors
        contributors << issues_comments_authors
        contributors << pull_requests_authors
        contributors << pull_requests_mergers
        contributors << pull_requests_commit_authors
        contributors << pull_requests_comments_authors
        contributors << pull_requests_reviews_authors
      end
    end

    private

    def stub_contributors
      50.times do |i|
        contributors << Solidus::Contributor.new(
          login: "ghost-#{i}",
          avatar_url: "http://github.com/ghost.png",
        )
      end
    end

    def graphql_query_builder
      @graphql_query_builder ||= Github::GraphQLQueryBuilder.new
    end
  end
end
