import React from 'react'

export default function Card(props) {
    return (
        <div className="row justify-content-md-center border border-top-0">
            <div className="row justify-content-md-center  border-top-0 pl-0 "> 
            <div className="float-left mt-0 ml-0 image-profile-circle ml-0">
            
                <img src={props.src}  className="rounded-circle profile-home" alt="profile Home"/>
            </div>
                <div className="post"><a href="/" className="name-user-profile">{props.name}</a>
                    <a href="/" className="username">{props.username}</a>. <span>{props.time}</span> <br/>
                <p className="post-content">
                En anglais, John Doe (version féminine : Jane Doe) est une expression qui désigne une personne non identifiée ou un homme de la rue 
                </p>
                <img src="images/icons_0/comment.svg" className="ml-1 mr-1 post-icons " alt=""   /> 
                <img src="images/icons_0/like.svg" className="ml-1 mr-1 post-icons" alt=""  />
                <img src="images/icons_0/share.svg" className="ml-1 mr-1 post-icons"  alt=""  />
                <img src="images/icons_0/register.svg" className="ml-1 mr-1 post-icons " alt=""  />
            </div>
            </div>
        </div>
    )
}
