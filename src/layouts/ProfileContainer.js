import React,{ useEffect}  from 'react'
import { format } from 'timeago.js';
import { logout } from "../store/actions/user";
import { getAllByUser } from '../store/actions/tweet';
import { useSelector, useDispatch } from "react-redux";
import Card from '../components/UI/Card';
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import {createBrowserHistory} from 'history'

import "../css/profile.css";

const ProfileContainer = props => {
  

    if(props.logout){
      logout()
      console.log("Logout....")
      const history = createBrowserHistory();
      history.go(0)
      //return  Redirect("/login")
    }
    const dispatch = useDispatch()
    const tweets = useSelector(state => state.tweet.tweets)
    const user = useSelector(state => state.user.user)
    useEffect(() => {
      dispatch(getAllByUser(user.id))
    }, [dispatch, user])

    const shareTweet = (tweet_id) => {
      console.log("On share::", tweet_id)
    }

    const showCards = () =>{
      if (tweets.length !== 0) {
        return tweets.map(tweet => {
          let liked = 0;
          tweet.likes.map(like => {
            if(user.id === like.user.id){
              liked = 1
            }
          })
          const likeSrc = liked === 0 ? 'images/icons_0/like.svg' : 'images/icons_0/like_red.svg'
        return <Card  likesrc={likeSrc}
                      username={tweet.user.id}
                      countweets={tweet.countLikes}  
                      name={tweet.user.name} 
                      countComments={tweet.countComments}
                      onShare={()=>shareTweet(tweet.id)}
                      tweetOwner={tweet.tweet_owner}
                      id={tweet.id}
                      src="./images/avatar-home.png" time={format(tweet.createdAt)} key={tweet.id} >{tweet.tweet_text}</Card>;
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
                  <img src="images/icons_profile/back.svg" className="icon-back" alt=""  />
                    <h5><strong>Mohammed Aoulad Bouchta</strong></h5> 
                    <p className="number-tweets">44 Tweets</p>
                  </div>
            </div>
            <div className="row justify-content-md-center  border-top-0 pl-0"> 
                <div className="header-container mt-0 ml-0 ">
               
                    <img src="./images/header-profile.jpg" alt="profile Header" className="header-container-image" />
                    <img src="./images/avatar-home.png"  className="rounded-circle profile-in-header" alt="profile Home"/>
                </div>
                <div className="head-box"> 
                    <button type="button" className="btn btn-outline-primary float-right  mr-1 mb-1 edit-profile-btn">Editer le profil</button>
                </div>
              </div>

              <div className="row  border border-top-0">
                <div className="row  border-top-0 pl-0" > 
                  <div className="mt-0 ml-0 ml-0"  style={{paddingLeft:25}}>
                    <p>
                      <strong>Mohammed Aoulad Bouchta</strong><br/>
                      <span  style={{color:'gray'}}>@AouladBouchta</span>
                    </p>
                    <p style={{color: 'gray', fontSize: 'small'}}>
                      <img src="./images/icons_profile/local.svg" alt=""  />Tanger <img alt=""  src="./images/icons_profile/fb.svg"/>facebook.com/Motamarred <img src="./images/icons_profile/cal.svg" alt="" />A rejoint Twitter en août 2009
                    </p>
                    
                    <p style={{paddingTop:0}}>
                      <span><strong>125</strong> <span style={{color:'gray'}}>abonnements</span></span> <span><strong>226</strong> <span style={{color:'gray'}}>abonnés</span></span>
                    </p>
                  </div>
                </div>
              </div>
              {showCards()}

          </div>
          <RightContainer/>
        </div>  
      </div>
        
    )
}


export default  ProfileContainer;