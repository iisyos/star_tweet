import {components} from '@octokit/openapi-types'

export type GitHubUser = components['schemas']['public-user']

export type TweetResponse = {
  edit_history_tweet_ids: []
  id: string
  text: string
}

export type ConsumerTokenType = {
  key: string
  secret: string
}

export type TokenType = {
  key: string
  secret: string
}
