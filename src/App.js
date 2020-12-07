import React, { useState } from 'react';
import './App.css';
import { Navigation } from './components/Navigation'
import { Profile } from './components/Profile'
import { TweetForm } from './components/TweetForm'
import { Tweet } from './components/Tweet'
import { Tweets } from './components/Tweets'

const initialTweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1607136680478
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
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
      "handle": "@rd"
    },
    "content": {
      "text": "Boing boing boing kangarooooo"
    },
    "created_at": 1607223080478
  }
];

function App() {
  const [tweetData, setTweetData] = useState(initialTweetData)

  const addNewTweet = (tweetText) => {
    const newTweet = {
      "user": {
        "name": "Swoopy",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@swooooops"
      },
      "content": {
        "text": tweetText
      },
    }
    setTweetData([newTweet, ...tweetData])
  }

  return (
    <div className="App" >
      <Navigation />
      <Profile />
      <main className="container">
        <TweetForm addNewTweet={ addNewTweet } />
        <Tweets tweetData={ tweetData }/>
      </main>
    </div>
  );
}

export default App;
