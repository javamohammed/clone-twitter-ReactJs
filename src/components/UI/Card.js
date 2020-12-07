import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { saveLike } from "../../store/actions/tweet";
export default function Card(props) {
    const dispatch = useDispatch()
    const [likeSrc, setLikeSrc] = useState(props.likesrc)
    const [counTweets, setCountTweets] = useState(props.countweets)
    const [tweetId, setTweetId] = useState(props.tweetid)
    const [userId, setUserId] = useState(props.username)
    const likeIt = async ()=> {

        await dispatch(saveLike(userId, tweetId))
        if(likeSrc == 'images/icons_0/like.svg'){
            setLikeSrc('images/icons_0/like_red.svg')
            setCountTweets(state =>state + 1)
        }else {
            setLikeSrc('images/icons_0/like.svg')
            setCountTweets( state => state - 1)
        }
    }
    return (
        <div className="row justify-content-md-center border border-top-0">
            <div className="row justify-content-md-center  border-top-0 pl-0 "> 
            <div className="float-left mt-0 ml-0 image-profile-circle ml-0">
            
                <img src={props.src}  className="rounded-circle profile-home" alt="profile Home"/>
            </div>
                <div className="post"><a href="/" className="name-user-profile">{props.name}</a>
                    <a href="/" className="username">{props.username}</a>. <span>{props.time}</span> <br/>
                <p className="post-content">
                {props.children}
                </p>
                <img src="images/icons_0/comment.svg" className="ml-1 mr-1 post-icons " alt="comment"   /> 
                <img src={likeSrc} onClick={likeIt} className="ml-1 mr-1 post-icons" alt="like"  />{counTweets}
                <img src="images/icons_0/share.svg" className="ml-1 mr-1 post-icons"  alt="share"  />
                <img src="images/icons_0/register.svg" className="ml-1 mr-1 post-icons " alt="register"  />
            </div>
            </div>
        </div>
    )
}
