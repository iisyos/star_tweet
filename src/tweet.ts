import axios from 'axios'
type TweetResponse = {
  edit_history_tweet_ids: []
  id: string
  text: string
}

export async function tweet(
  text: string,
  Authorization: string
): Promise<TweetResponse> {
  try {
    const res = await axios.post(
      'https://api.twitter.com/2/tweets',
      {text},
      {
        headers: {
          Authorization,
          'Content-Type': 'application/json'
        }
      }
    )
    return res.data
  } catch (error) {
    throw new Error('Unsuccessful request')
  }
}
