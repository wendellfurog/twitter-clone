import React, { useState } from 'react';
import '../styles/TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();
    
    db.collection('posts').add({
      displayName: 'Wendell Furog',
      username: 'wendellfurog_',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png'
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className='tweetBox'>  
      <form>
        <div className='tweetBox_input'>
          <Avatar src='https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png' alt=''/>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage} 
            placeholder="What's happening?" 
            type='text' 
          />
        </div>
          <input 
            onChange={(e) => setTweetImage(e.target.value)}
            value={tweetImage}
            className='tweetBox_imageInput'
            placeholder="Optional: Enter image URL" 
            type='text'
          />
          <Button 
            onClick={sendTweet}
            type='submit' 
            className='tweetBox_tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox