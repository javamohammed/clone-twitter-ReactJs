import React, {useEffect} from 'react';
import { format } from 'timeago.js';
import Card from '../components/UI/Card';
import CardComment from '../components/UI/CardComment';
import { getTweet, saveTweet } from '../store/actions/tweet';
import { useDispatch, useSelector } from "react-redux";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import "../css/home.css";

import { useParams } from "react-router-dom";

function CommentsContainer(props) {
    const dispatch = useDispatch()
    const tweets = useSelector(state => state.tweet.tweets)
    const user = useSelector(state => state.user.user)

    const {tweetId} = useParams();

    useEffect(() => {
      dispatch(getTweet(tweetId))
    }, [dispatch, tweetId])

    const shareTweet = async (tweet_text, tweet_owner) => {
      await dispatch(saveTweet(tweet_text, tweet_owner))
      console.log("On share::", tweet_owner)
    }
    
    const showCard = () =>{
      if (tweets.length !== 0) {
        return tweets.map(tweet => {
          let liked = 0;
          tweet.likes.map(like => {
            if(user.id === like.user.id){
              liked = 1
            }
          })
          const likeSrc = liked === 0 ? '../images/icons_0/like.svg' : '../images/icons_0/like_red.svg'
        return <Card  likesrc={likeSrc}
                      username={tweet.user.id}
                      countweets={tweet.countLikes}  
                      name={tweet.user.name}
                      src="../images/avatar-home.png"
                      time={format(tweet.createdAt)} 
                      tweetid={tweet.id}
                      tweetOwner={tweet.tweet_owner}
                      id={tweet.id}
                      key={tweet.id}
                      countComments={tweet.countComments}
                      onShare={()=>shareTweet(tweet.tweet_text, tweet.user.id)}
                      from='comment'
                       >{tweet.tweet_text}</Card>;
        });
      }
      return
    }

    const showComments = () =>{
      console.log("tweets[0]:::",tweets[0])
      if (tweets[0].comments.length !== 0) {
        return tweets[0].comments.map(comment => {

          return <CardComment  
                        username={comment.user.id}
                        name={comment.user.name}
                        src="../images/avatar-home.png"
                        time={format(comment.createdAt)} 
                        key={comment.id}
                        >{comment.commentText}</CardComment>;
          });
      }
      return
    }
  return (
    <div className="container">
        <div className="row">
        <LeftContainer />
          <div className="col-sm-6 border centered-div">
            <div className="row justify-content-md-center border border-top-0 mt-2">
                    <div className="col-sm float-left ">
                        <h5><strong>Tweet</strong></h5> 
                      </div>
                      <div className="col-sm float-right"> 
                        <img src="../images/icons/icon_home.png" className="float-right icon-home" alt=""   />
                      </div>
                </div>
                {showCard()}
                <div className="comments">
                  {showComments()}
                </div>

          </div>
        <RightContainer/>
        </div>
      </div>
  );
}

export default CommentsContainer;
