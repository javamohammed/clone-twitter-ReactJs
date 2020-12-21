import { GET_ALL, GET_ALL_BY_USER, ADD_TWEET, GET_TWEET_BY_ID, GET_BOOKMARKS } from "../actions/actionTypes";
//import User from "../../models/User";
const initialState  = {
    tweets:"",
    error:"",
    bookmarks:null
}



const rootReducer = (state = initialState , action) => {

    switch (action.type) {
        case GET_ALL:
            return {...state, tweets: action.tweets }
        case GET_ALL_BY_USER:
            return {...state, tweets: action.tweets }
        case GET_TWEET_BY_ID:
            return {...state, tweets: action.tweets }
        case ADD_TWEET:
            return {...state }
        case GET_BOOKMARKS:
            return {...state, bookmarks: action.bookmarks }
        default:
            return state
    }
}

export default rootReducer