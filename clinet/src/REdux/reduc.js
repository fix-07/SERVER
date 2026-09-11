import { GETUSER, GETUSERS } from "./actiontype";

const initialState = {
    users: [],
    user :{}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
       case GETUSERS : return {...state,users:action.payload}
       case GETUSER : return {...state,user:action.payload}
        default:
            return state;
    }
};

export default userReducer;
