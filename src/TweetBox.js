import React from 'react';
import './TweetBox.css';
import { Avatar, Button} from '@material-ui/core';

function TweetBox() {
   return (
      <div className="tweetBox">
         <form>
            <div className="tweetBox__input">
               <Avatar src=""></Avatar>
               <input placeholder="What's happening?" type="text"></input>
               <input placeholder="Enter image URL" type="text"></input>
            </div>
            <Button>Tweet</Button>
         </form>
      </div>
   );
}

export default TweetBox;
