import React from 'react';
import './Tweet.css';

export const Tweet = (props) => {
  const {name, handle, avatar, text} = props

  return (
    <>
      {name && handle && avatar && text &&
        (
          <article className="tweet">
            <header>
              <div>
                <img src={ avatar } />
                <span>{ name }</span>
              </div>
              <span className="handle">{ handle }</span>
            </header>
            <p>{ text }</p>
            <footer>
              <span>1 days ago</span>
              <div className="tweet-actions">
                <a href="#"><img src="/images/flag-tweet.png" alt="Flag tweet" /></a>
                <a href="#"><img src="/images/share-tweet.png" alt="Share tweet" /></a>
                <a href="#"><img src="/images/heart-tweet.png" alt="Heart this tweet" /></a>
              </div>
            </footer>
          </article>
        )
      }
    </>
  )
};