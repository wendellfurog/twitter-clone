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
      avatar: 'https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/293330471_4973154332789717_5879888674626587402_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nHM1dWoc-iAAX_sYdRH&_nc_ht=scontent.fceb1-2.fna&oh=00_AT9YiLv7jA42CWEkt_Ma3PXLXLn37uhEn0PiZhJovcgEmQ&oe=6331F7A4'
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className='tweetBox'>  
      <form>
        <div className='tweetBox_input'>
          <Avatar src='https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/293330471_4973154332789717_5879888674626587402_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nHM1dWoc-iAAX_sYdRH&_nc_ht=scontent.fceb1-2.fna&oh=00_AT9YiLv7jA42CWEkt_Ma3PXLXLn37uhEn0PiZhJovcgEmQ&oe=6331F7A4' alt=''/>
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