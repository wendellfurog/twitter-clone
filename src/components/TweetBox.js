import React from 'react';
import '../styles/TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import avatar from '../avatar.jpg';

function TweetBox() {
  return (
    <div className='tweetBox'>  
      <form>
        <div className='tweetBox_input'>
          <Avatar src={avatar} alt="my pic"/>
          <input placeholder="What's happening?" type='text' />
        </div>
        <input 
          className='tweetBox_imageInput'
          placeholder="Optional: Enter image URL" 
          type='text'
        />
        <Button className='tweetBox_tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox