import { GET_ALL, GET_ALL_BY_USER, LIKE_TWEET } from "./actionTypes";

const API_URL = `http://localhost:8000/api`

export const getAll = () => {
    return async dispatch => {
        const tweets_url = `${API_URL}/tweets/`
        const response = await fetch(tweets_url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token')
            }
        })
        const resData = await response.json()
        return dispatch({type: GET_ALL, tweets: resData})
        

    }
}
export const getAllByUser = (userId) => {
    return async dispatch => {
        const tweets_url = `${API_URL}/tweets/user/${userId}`
        const response = await fetch(tweets_url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token')
            }
        })
        const resData = await response.json()
        return dispatch({type: GET_ALL_BY_USER, tweets: resData})
        

    }
}

export const saveLike = (userId, tweetId) => {
    
    return async dispatch => {
        const tweets_url = `${API_URL}/tweets/like/${userId}/${tweetId}`
        const response = await fetch(tweets_url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token')
            }
        })
        return dispatch({type: LIKE_TWEET})
        

    }
}