import {SET_PATIENTS_DATA} from "./action/patientAction";



let initialState = {
    patients:[],
};



export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PATIENTS_DATA: {
            return {...state,patients:action.data}
        }
        default:
            return state;
    }
};

