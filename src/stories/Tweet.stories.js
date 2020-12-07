import React from 'react'
import { Tweet } from '../components/Tweet'

export default { title : "Single twoot" }

export const emptyTweet = () => <Tweet />

export const populatedTweet = () => {
  const singleTweet = {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1607136680478
  }
  return <Tweet
    // key={index}
    name={singleTweet.user.name}
    handle={singleTweet.user.handle}
    avatar={singleTweet.user.avatars}
    text={singleTweet.content.text}
  />
}