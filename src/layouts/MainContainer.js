import React,{ useEffect}  from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getAll } from '../store/actions/tweet';
import Card from '../components/UI/Card';
import WhatsUp from '../components/UI/Others/WhatsUp';
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import "../css/home.css";

function MainContainer() {
  
  const dispatch = useDispatch()
  const tweets = useSelector(state => state.tweet.tweets)
  const user = useSelector(state => state.user.user)
  useEffect(() => {
    dispatch(getAll())
  }, [dispatch])
  console.log('tweets ==>', tweets)

  const showCards = () =>{
    if (tweets.length !== 0) {
      return tweets.map(tweet => {
        let liked = 0;
        tweet.likes.map(like => {
          if(user.id == like.user.id){
            liked = 1
          }
        })
        const likeSrc = liked == 0 ? 'images/icons_0/like.svg' : 'images/icons_0/like_red.svg'
      return <Card  likesrc={likeSrc}
                    username={tweet.user.id}
                    countweets={tweet.countLikes}  
                    name={tweet.user.name}
                    src="./images/avatar-home.png"
                    time="2 min" 
                    tweetid={tweet.id}
                    key={tweet.id}
                     >{tweet.tweet_text}</Card>;
      });
    }
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
        <div className="row">
        <LeftContainer />
        <div className="col-sm-6 border centered-div">
          <div className="row justify-content-md-center border border-top-0 mt-2">
                  <div className="col-sm float-left ">
                      <h5><strong>Acceuil</strong></h5> 
                    </div>
                    <div className="col-sm float-right"> 
                      <img src="images/icons/icon_home.png" className="float-right icon-home" alt=""   />
                    </div>
              </div>
              
            <WhatsUp userimg="./images/avatar-home.png"/>
            {showCards()}

        </div>
        <RightContainer/>
        </div>
      </div>
  );
}

export default MainContainer;
