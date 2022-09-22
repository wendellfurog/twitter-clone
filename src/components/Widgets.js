import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "../styles/Widgets.css";
import {
  TwitterTimelineEmbed,
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
        <TwitterTweetEmbed tweetId={'1571514394680360960'} />
        <TwitterTimelineEmbed 
          sourceType='profile'
          screenName='G_I_DLE'
          options={{ height: 400 }}
        />
        <br/>
        <TwitterShareButton
          url={'https://www.facebook.com/allkpop'}
          options={{ text: '#AllKpopLatestNews', via: 'allkpop'}}
        />
      </div>
    </div>
  )
}

export default Widgets