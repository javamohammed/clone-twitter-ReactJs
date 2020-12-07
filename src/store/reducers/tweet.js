import { GET_ALL, GET_ALL_BY_USER } from "../actions/actionTypes";
//import User from "../../models/User";
const initialState  = {
    tweets:"",
    error:""
}



const rootReducer = (state = initialState , action) => {

    switch (action.type) {
        case GET_ALL:
            return {...state, tweets: action.tweets }
        case GET_ALL_BY_USER:
            return {...state, tweets: action.tweets }
        default:
            return state
    }
}

export default rootReducer