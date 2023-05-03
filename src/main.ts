import * as core from '@actions/core'
import * as github from '@actions/github'
import {getUserProfile} from './profile'
import {tweet} from './tweet'
import {getAuthHeader} from './auth'

async function run(): Promise<void> {
  try {
    if (github.context.payload.sender === undefined)
      throw new Error('sender is undefined')
    const username = github.context.payload.sender.login
    const response = await getUserProfile(username)
    const twitter_username = response.twitter_username
    if (twitter_username === null) {
      core.info('twitter_username is null')
      return
    }
    core.info(`twitter_username is ${twitter_username}`)

    const text = `@${twitter_username}\n${core.getInput('text')}`
    await tweet(
      text,
      getAuthHeader(
        {
          key: core.getInput('consumer_key'),
          secret: core.getInput('consumer_secret')
        },
        {
          key: core.getInput('access_token'),
          secret: core.getInput('access_token_secret')
        }
      )
    )
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
