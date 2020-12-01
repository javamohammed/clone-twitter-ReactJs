import { LOGIN } from "./actionTypes";

const API_URL = `http://localhost:8000/api`


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
        const resData = await response.json();
        console.log("resData :::", resData)
      return  dispatch({email: "oo@oo.com", "name": "ooo", type: LOGIN})
    }
}