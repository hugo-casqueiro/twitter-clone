import React, {useState, useEffect} from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      db.collection('posts').onSnapshot(snapshot => (
         setPosts(snapshot.docs.map(doc => doc.data()))
      ))
   }, []);

   return (
      <div className="feed">
         {/* Header */}
         <div className="feed__header">
            <h2>Home</h2>
         </div>

         {/* TweetBox */}
         <TweetBox />
         
         {/* Post -- from firebase */}
         <FlipMove>
            {posts.map(post => (
               <Post
                key={post.text}
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                image={post.image}
                avatar={post.avatar} />
            ))}
         </FlipMove>
         
         {/* 
         <Post
            displayName="Hugo Casqueiro"
            username='hugoc'
            verified={true}
            text="YOOO its working"
            image="https://media.giphy.com/media/63I6FXZTXks2A/giphy.gif"
            avatar="" />
         */}

      </div>
   );
}

export default Feed;
