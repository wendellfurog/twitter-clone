import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "../styles/Widgets.css";
import {
  TwitterTimeLineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input placeholder='Search Twitter' type='text' />
      </div>
      <div className='widgets__widgetContainer'>
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={'1572840350116646912'} />
      </div>
    </div>
  )
}

export default Widgets