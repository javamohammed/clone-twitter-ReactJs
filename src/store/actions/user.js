import { LOGIN, AUTH_LOGOUT, AUTH_SUCCESS, AUTH_SIGN_IN } from "./actionTypes";
import User from "../../models/User";
import jwt_decode from "jwt-decode";

const API_URL = `http://localhost:8000/api`



export const signIn = (email, name, password) => {
    return async dispatch => {
        const signIn_url = `${API_URL}/signin`
        const response = await fetch(signIn_url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name
            })
        })
        const resData = await response.json();
        if (response.status === 200) {
            const user = new User({email: email, name: name});
            let decodedToken = jwt_decode(resData.token);
            localStorage.setItem("token", resData.token);
            localStorage.setItem("expirationDate", decodedToken.exp);
            console.log("user :::", user)
            localStorage.setItem("user",  JSON.stringify(user));
            
            return  dispatch({token: resData.token, expirationDate: decodedToken.exp, user: user, type: LOGIN})
        } else {
            return  dispatch({error: resData.token, type: AUTH_SIGN_IN})
        }
    }
}

export const login = (email, password) => {
        const authenticate_url = `${API_URL}/authenticate`
    return  async dispatch => {
        const response = await fetch(authenticate_url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: email,
                password: password
            })
        })
        console.log("response :::", response)
        if(response.status === 200){
            const resData = await response.json();
            let decodedToken = jwt_decode(resData.token);
            ///-----console
            /*
            console.log("token", resData.token)
            console.log("expirationDate", decodedToken)
            */
            //##########
            localStorage.setItem("token", resData.token);
            localStorage.setItem("expirationDate", decodedToken.exp);
            localStorage.setItem("user",  JSON.stringify(resData.user));
            return  dispatch({token: resData.token, expirationDate: decodedToken.exp, user: resData.user, type: LOGIN})
        }else{

            return  dispatch({error: "Email or Password Incorrect!!", type: LOGIN})
        }
        
        
     
    }
}


export const authCheckState = () => {
    return  dispatch => {
        const token = localStorage.getItem('token')
        const expirationDate = localStorage.getItem('expirationDate') * 1000
        if(!token){
            dispatch(logout())
        }else{
            if(Date.now() >= expirationDate ){
                dispatch(logout())
            }else{
                const user = JSON.parse( localStorage.getItem('user'))
                dispatch(authSuccess(token, user, localStorage.getItem('expirationDate')))
                dispatch(checkAuthTimeOut((expirationDate - Date.now())) )
            }

        }
    }
}

export const authSuccess = (token, user, expirationDate) => {
    return {
      type: AUTH_SUCCESS,
      token: token,
      user: user, 
      expirationDate: expirationDate
    };
  };


export const checkAuthTimeOut = expirationTime => {
    return dispatch => {
      setTimeout(() => {
        dispatch(logout());
      }, expirationTime);
    };
  };

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("user");
    return {
      type: AUTH_LOGOUT
    };
  };