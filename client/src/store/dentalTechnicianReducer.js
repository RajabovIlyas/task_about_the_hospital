import {SET_DENTAL_TECHNICIAN_DATA} from "./action/dentalTechnicianAction";



let initialState = {
    dentalTechnician:[],
};



export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DENTAL_TECHNICIAN_DATA: {
            return {...state,dentalTechnician:action.data}
        }
        default:
            return state;
    }
};

