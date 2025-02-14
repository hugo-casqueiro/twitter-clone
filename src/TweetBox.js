import React, {useState} from 'react';
import './TweetBox.css';
import { Avatar, Button} from '@material-ui/core';
import db from './firebase';

function TweetBox() {
   const [tweetMessage, setTweetMessage] = useState("");
   const [tweetImage, setTweetImage] = useState("");

   const sendTweet = e => {
      e.preventDefault(); // this stops the default refresh of the form
      
      db.collection('posts').add({
         displayName: 'Hugo Casqueiro',
         username: 'hugoc',
         verified: true,
         text: tweetMessage,
         image: tweetImage,
         avatar:  ''
      });
      
      setTweetMessage(""); // reset state
      setTweetImage(""); 
   }

   return (
      <div className="tweetBox">
         <form>
            <div className="tweetBox__input">
               <Avatar src=""></Avatar>
               <input
                onChange={(e) => setTweetMessage(e.target.value)} 
                value={tweetMessage}
                placeholder="What's happening?"
                type="text" />
            </div>
            <input 
             value={tweetImage}
             onChange={(e) => setTweetImage(e.target.value)}
             className="tweetBox__imageInput"
             placeholder="Enter image URL" 
             type="text" />

            <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
         </form>
      </div>
   );
}

export default TweetBox;
