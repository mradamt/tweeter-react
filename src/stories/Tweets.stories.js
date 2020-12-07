import React from 'react'
import { Tweets } from '../components/Tweets'

export default { title : "Tweet container" }

export const emptyTweet = () => <Tweets />

export const populatedTweet = () => {
  const tweets = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "Hurr durr durr durr murr durr"
      },
      "created_at": 1607136680478
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@bazooomber"
      },
      "content": {
        "text": "Boing boing boing kangarooooo"
      },
      "created_at": 1607223080478
    },
    {
      "user": {
        "name": "Swoopy",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@swoopy"
      },
      "content": {
        "text": "Zip zop zapper"
      },
      "created_at": 1607223080478
    }
  ];

  return <Tweets tweetData={tweets}/>
}