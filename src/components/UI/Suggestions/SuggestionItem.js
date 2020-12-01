import React from 'react'

const SuggestionItem = props  => {
    return (
        <div className="row justify-content-md-center border border-top-0 second-col-right">
        <div className="float-left mt-0 ml-0 image-profile-circle ml-0">
  
          <img src={props.src}  className="rounded-circle profile-suggestion" alt="profile suggestion"/>
      </div>
        <div className="col-sm float-left ">
            <a href="/" className="name-user-suggestion">{props.name}</a> <a href="/" className="username">{props.username}</a>
        </div>
        <div className="col-sm float-right"> 
          <button type="button" className="btn btn-outline-primary float-right  mr-1 mb-1 follow-btn">Suiver</button>
        </div>
    </div>
    )
}

export default  SuggestionItem