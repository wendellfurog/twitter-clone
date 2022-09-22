import React, { useEffect, useState } from 'react'
import '../styles/Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'
import Flipmove from 'react-flip-move';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className='feed'>
      <div className='feed_header'>
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Flipmove>
        {posts.map(post => (
          <Post 
            key={post.text}
            className='feed__content'
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </Flipmove>
    </div>
  )
}

export default Feed