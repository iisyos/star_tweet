import oAuth from 'oauth-1.0a'
import crypto from 'crypto'
import {ConsumerTokenType, TokenType} from './types'

export function getAuthHeader(
  consumer: ConsumerTokenType,
  token: TokenType
): string {
  const oauth = new oAuth({
    consumer,
    signature_method: 'HMAC-SHA1',
    hash_function: (baseString, key) =>
      crypto.createHmac('sha1', key).update(baseString).digest('base64')
  })

  const requestData = {
    url: 'https://api.twitter.com/2/tweets',
    method: 'POST'
  }

  return oauth.toHeader(oauth.authorize(requestData, token))['Authorization']
}
