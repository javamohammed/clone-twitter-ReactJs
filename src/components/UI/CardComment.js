import React from 'react'

export default function CardComment(props) {
    return (
        <div className="row justify-content-md-center border border-top-0">
        <div className="row justify-content-md-center  border-top-0 pl-0 "> 
        <div className="float-left mt-0 ml-0 image-profile-circle ml-0">
        
            <img src={props.src}  className="rounded-circle profile-home" alt="profile Home"/>
        </div>
            <div className="post"><a href="/" className="name-user-profile">{props.name}</a>
                <a  href="#"  className="username">@{props.username}</a>.
                <a href="#" className="username"> <span>{props.time}</span> </a>
                <br/>
            <p className="post-content">
            {props.children}
            </p>
        </div>
        </div>
    </div>
    )
}
