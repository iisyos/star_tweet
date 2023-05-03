<img src="./thumbnail.png" />

# TweetOnStar

TweetOnStar is a GitHub Action that sends a thank you tweet to users who star your GitHub repository.

## Setup

1. Create a Twitter Developer account and a project to obtain the necessary API keys and access tokens.
[here](https://developer.twitter.com/en)

2. Add the following GitHub secrets to your repository:
- CONSUMER_KEY
- CONSUMER_SECRET
- ACCESS_TOKEN
- ACCESS_TOKEN_SECRET

## Inputs

### `consumer_key `

**Required** Twitter consumer key.

### `consumer_secret `

**Required** Twitter consumer secret.

### `access_token `

**Required** Twitter access token

### `access_token_secret `

**Required** twitter access token secret

### `text `

**Option** This is tweet description.
Default value is below.

```txt
🌟 Thank you for starring our repository! We appreciate your support and will continue to deliver great content! 😃 #GitHub #Star
```

## Usage

Sample usage.

```yml
name: StarTweet

on: [watch]

jobs:
  tweet:
    runs-on: ubuntu-latest
    steps:
    - name: Send tweet
      uses: your-username/StarTweet@main
      with:
          consumer_key: ${{ secrets.CONSUMER_KEY }}
          consumer_secret: ${{ secrets.CONSUMER_SECRET }}
          access_token: ${{ secrets.ACCESS_TOKEN }}
          access_token_secret: ${{ secrets.ACCESS_TOKEN_SECRET }}
          text: "🌟 Thank you for starring our repository! We appreciate your support and will continue to deliver great content! 😃 #GitHub #Star" # option

```

## License

[MIT](https://choosealicense.com/licenses/mit/)