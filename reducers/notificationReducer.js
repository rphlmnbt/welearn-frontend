import { SET_TOKEN } from "../constants";

const initialState = {
    expoPushToken: ''
}

const notificationReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TOKEN:
            return {
                ...state,
                expoPushToken:action.payload
            };
        default:
            return state;
    }
}

export default notificationReducer
    