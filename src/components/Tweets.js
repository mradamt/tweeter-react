import React from 'react';
import { Tweet } from './Tweet'

export const Tweets = props => {

  const { tweetData } = props

  const tweets = tweetData ? tweetData.map((tweetData, index) => <Tweet
    key={index}
    name={tweetData.user.name}
    handle={tweetData.user.handle}
    avatar={tweetData.user.avatars}
    text={tweetData.content.text}
    />
  ) : "No twoot here, soz"

  return (
    <section id="tweets-container">
      { tweets }
    </section>
  )


}