import React from 'react'
//border: none ;     background-color: transparent;     resize: none;     outline: none;
export default function WhatsUp(props) {
    return (
        <div className="row justify-content-md-center  border-top-0 pl-0 box-post"> 
            <div className="float-left mt-0 ml-0 image-profile-circle ml-0">
            
                <img src={props.userimg}  className="rounded-circle profile-home" alt="profile Home"/>
            </div>
            <div className="what-is-news"> 
            <div className="content-post-div">
            
                <textarea 
                    id="tweet_text"
                    style={{border:'none', backgroundColor:'transparent', resize:'none', outline:'none'}}
                    cols='55' rows="3"
                    placeholder="Quoi de neuf?">
                </textarea>
            </div>
                
                <img src="images/icons/images.svg" className="ml-1 mr-1 home-icons"  alt=""  />
                <img src="images/icons/gif.svg" className="ml-1 mr-1 home-icons"  alt=""  />
                <img src="images/icons/quotion.svg" className="ml-1 mr-1 home-icons" alt=""   />
                <img src="images/icons/emo.svg" className="ml-1 mr-1 home-icons" alt=""  />
                <img src="images/icons/calandar.svg" className="ml-1 mr-1 home-icons" alt=""  />
                <button type="button" className="btn btn-primary float-right disabled mr-1 mb-1 ">Tweeter</button>
            </div>
        </div>
    )
}
