import {GitHubUser} from './types'
import fetch from 'node-fetch'

export async function getUserProfile(username: string): Promise<GitHubUser> {
  const url = `https://api.github.com/users/${username}`
  const response = await fetch(url)

  if (response.ok) {
    const data = (await response.json()) as GitHubUser
    return data
  } else {
    throw new Error(`Error fetching profile: ${await response.json()}`)
  }
}
