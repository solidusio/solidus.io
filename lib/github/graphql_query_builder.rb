# frozen_string_literal: true

require 'graphql/client'
require 'graphql/client/http'

module Github
  class GraphQLQueryBuilder
    URL = 'https://api.github.com/graphql'
    GITHUB_GRAPHQL_ACCESS_TOKEN = ENV['GITHUB_GRAPHQL_ACCESS_TOKEN']

    HttpAdapter = ::GraphQL::Client::HTTP.new(URL) do
      def headers(_context)
        {
          "Authorization" => "Bearer #{GITHUB_GRAPHQL_ACCESS_TOKEN}",
          "User-Agent" => 'Ruby'
        }
      end
    end

    Client = ::GraphQL::Client.new(
      schema: ::GraphQL::Client.load_schema(HttpAdapter),
      execute: HttpAdapter
    )

    ContributorsQuery = Client.parse <<-'GRAPHQL'
      query($org: String!, $offset: Int!) {
        organization(login: $org) {
          name
          url
          repositories(last: $offset) {
            edges {
              node {
                issues(last: $offset) {
                  edges {
                    node {
                      author {
                        ...userFields
                      }
                      comments(first: $offset) {
                        edges {
                          node {
                            author {
                              ...userFields
                            }
                          }
                        }
                      }
                    }
                  }
                }
                pullRequests(last: $offset) {
                  edges {
                    node {
                      author {
                        ...userFields
                      }
                      mergedBy {
                        ...userFields
                      }
                      commits(last: $offset) {
                        edges {
                          node {
                            commit {
                              author {
                                user {
                                  ...userFields
                                }
                              }
                            }
                          }
                        }
                      }
                      comments(first: $offset) {
                        edges {
                          node {
                            author {
                              ...userFields
                            }
                          }
                        }
                      }
                      reviews(first: $offset) {
                        edges {
                          node {
                            author {
                              ...userFields
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      fragment userFields on User {
        login
        avatarUrl(size: 100)
      }
    GRAPHQL

    def contributors_for(organization:, offset: 10)
      Client.query(
        ContributorsQuery,
        variables: {
          org: organization,
          offset: offset,
        }
      )
    end
  end
end
