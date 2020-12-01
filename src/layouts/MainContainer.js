import React/*,{ useEffect} */ from 'react';
//import { useSelector, useDispatch } from "react-redux";
//import { login } from '../store/actions/user';
import Card from '../components/UI/Card';
import WhatsUp from '../components/UI/Others/WhatsUp';

function MainContainer() {
  /*
    const dispatch = useDispatch()
  useEffect(() => {
    //  dispatch(login("test@test.com","12345678"))
  }, [dispatch, login])*/
  return (
    <>
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
            <Card username="@hdhdhd" name="Jon Vito" src="./images/avatar-home.png" time="2 min"/>

        </div>
      
    </>
  );
}

export default MainContainer;
