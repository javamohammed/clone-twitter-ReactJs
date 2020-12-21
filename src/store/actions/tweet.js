import { GET_ALL, 
        GET_ALL_BY_USER,
        LIKE_TWEET,
        ADD_TWEET,
        GET_TWEET_BY_ID,
        GET_BOOKMARKS  } from "./actionTypes";

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

export const getTweet = (tweetId) => {
    console.log("tweetId::::",tweetId)
    return async dispatch => {
        const tweets_url = `${API_URL}/tweets/${tweetId}`
        const response = await fetch(tweets_url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token')
            }
        })
        const resData = await response.json()
        
        return dispatch({type: GET_TWEET_BY_ID, tweets: resData})
        

    }
}

export const saveTweet = (tweet_text, tweet_owner) => {
    return async dispatch => {
        const tweets_url = `${API_URL}/tweets/`
        await fetch(tweets_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token')
            },
            body: JSON.stringify({
                tweet_text: tweet_text,
                tweet_owner: tweet_owner
            })
        })
        console.log("tweet_owner::::",tweet_owner)
        dispatch(getAll())
        return dispatch({type: ADD_TWEET})
        

    }
}

export const saveLike = (userId, tweetId) => {
    
    return async dispatch => {
        const tweets_url = `${API_URL}/tweets/like/${userId}/${tweetId}`
        await fetch(tweets_url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token')
            }
        })
        return dispatch({type: LIKE_TWEET})
        

    }
}


export const saveComment = (comment_text, tweetId, from ) => {

    const comments_url = `${API_URL}/comments/${tweetId}`

    return async dispatch => {
        
      const response =  await fetch(comments_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token')
            },
            body: JSON.stringify({
                commentText: comment_text
            })
        })
        console.log('kkkkkkkkk::',from)
        if(from === 'comment'){
            return dispatch(getTweet(tweetId))
        }
        return dispatch(getAll())
        
        

    }
}


export const getBookmarks = () => {
    return async dispatch => {
        const bookmarks_url = `${API_URL}/bookmarks/`
        const response = await fetch(bookmarks_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token')
            }
        })
        const resData = await response.json()
        
        return dispatch({type: GET_BOOKMARKS, bookmarks: resData})
        

    }
}