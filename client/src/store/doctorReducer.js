import {SET_DOCTORS_DATA} from "./action/doctorAction";



let initialState = {
    doctors:[],
};



export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DOCTORS_DATA: {
            return {...state,doctors:action.data}
        }
        default:
            return state;
    }
};

