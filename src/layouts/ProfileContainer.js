import React from 'react'
import "../css/profile.css";
import Card from '../components/UI/Card';
const ProfileContainer = () => {
    return (
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
              <Card username="@hdhdhd" name="Jon Vito" src="./images/avatar-home.png" time="2 min"/>
              <Card username="@hdhdhd" name="Jon Hola" src="./images/avatar-home.png" time="2 min"/>
              <Card username="@hdhdhd" name="Jon Vito" src="./images/avatar-home.png" time="2 min"/>

          </div>
    )
}


export default  ProfileContainer;