import React from 'react'
import '../styles/Post.css'
import { Avatar } from '@material-ui/core';
import avatar from '../avatar.jpg';
import meme from '../meme.jpg';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';


function Post({
  displayName,
  username,
  verified,
  text,
  image,
  timestamp
}) {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src={avatar} alt="my pic"/>
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              Wendell Furog{" "}
              <span className='post__headerSpecial'>
                <VerifiedIcon className='post__badge' /> @wendellfurog_
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>Lorem Ipsum is simply dummy text of the printing.</p>
          </div>
        </div>
        <img src={meme} alt='meme pic' />
        <div className='post__footer'>
          <ChatBubbleOutlineIcon fontSize='small' />
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  )
}

export default Post