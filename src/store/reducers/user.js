import { LOGIN } from "../actions/actionTypes";
//import User from "../../models/User";
const initialState  = {
    token:"",
    user: null
}



const rootReducer = (state = initialState , action) => {

    switch (action.type) {
        case LOGIN:
            return {...state, email: action.email, name: action.name}
    
        default:
            return state
    }
}

export default rootReducer