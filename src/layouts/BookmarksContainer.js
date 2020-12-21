import React, {useEffect} from 'react';
import { format } from 'timeago.js';
import CardComment from '../components/UI/CardComment';
import { getBookmarks } from '../store/actions/tweet';
import { useDispatch, useSelector } from "react-redux";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import "../css/home.css";
import { AiFillDelete } from 'react-icons/ai';

function BookmarksContainer(props) {
    const dispatch = useDispatch()
    const bookmarks = useSelector(state => state.tweet.bookmarks)

    useEffect(() => {
      dispatch(getBookmarks())
    }, [dispatch])

    /*
    const deleteTweet = async (tweet_text, tweet_owner) => {
      await dispatch(saveTweet(tweet_text, tweet_owner))
      console.log("On share::", tweet_owner)
    }
    */
    const showBookmarks = () =>{
      if (bookmarks !== null) {
        return bookmarks.map(bookmark => {

          return <CardComment  
                        username={bookmark.owner.id}
                        name={bookmark.owner.name}
                        src="../images/avatar-home.png"
                        time={format(bookmark.createdAt)} 
                        key={bookmark.id}
                        >{bookmark.tweet_text}<br></br>
                          <AiFillDelete color="red" size={20} style={{cursor:'pointer'}}/>
                          </CardComment>;
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
                        <h5><strong>Bookmarks</strong></h5> 
                      </div>
                      <div className="col-sm float-right"> 
                        <img src="../images/icons/icon_home.png" className="float-right icon-home" alt=""   />
                      </div>
                </div>
                  {showBookmarks()}

          </div>
        <RightContainer/>
        </div>
      </div>
  );
}

export default BookmarksContainer;
