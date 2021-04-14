import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import patientReducer from "./patientReducer";
import doctorReducer from "./doctorReducer";
import dentalTechnicianReducer from "./dentalTechnicianReducer";



let reducers = combineReducers(
    {
        Patients:patientReducer,
        Doctor:doctorReducer,
        DentalTechnician:dentalTechnicianReducer,
    });

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;

