import React, { useState } from 'react';
import './TweetForm.css'

export const TweetForm = (props) => {
  const { addNewTweet } = props

  const [tweetText, setTweetText] = useState('');
  const remainingChars = 140 - tweetText.length
  const counterColour = {color: remainingChars >= 0 ? "black" : "red"}

  const postTweet = event => {
    event.preventDefault()
    if (remainingChars >= 0 && remainingChars <= 140) {
      addNewTweet(tweetText)
    }
  }

  return (
    <section className="new-tweet">
      <h2>Compose Tweet</h2>
      <form action="/tweets/" method="POST" onSubmit={ postTweet }>
        <label htmlFor="tweet-text"></label>
        <textarea value={ tweetText } onChange={event => setTweetText(event.target.value)} name="text" id="tweet-text" placeholder="Up here for twooting down there for dancing"></textarea>
        <label htmlFor="tweet-text" id="tweet-validation-msg"></label>
        <footer>
          <button type="submit">Tweet</button>
          <output name="counter" id="counter" htmlFor="tweet-text" style={counterColour}>{remainingChars}</output>
        </footer>
      </form>
    </section>
  )
};