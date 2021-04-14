import { dentalTechnicianAPI} from "../../api/api";
import {message} from "antd";
import {getPatientsThunk} from "./patientAction";

export const SET_DENTAL_TECHNICIAN_DATA='SET_DENTAL_TECHNICIAN_DATA'

export const setDentalTechnicianAction = (data) => ({type: SET_DENTAL_TECHNICIAN_DATA, data});

export const getDentalTechnicianThunk = () => (dispatch) => {
    dentalTechnicianAPI.getAll()
        .then((data) => {
            dispatch(setDentalTechnicianAction(data));
        }).catch((error) => {
        message.error("Ошибка в получении данных");
    });
};

export const addDentalTechnicianThunk = (data) => (dispatch) => {
    dentalTechnicianAPI.create(data)
        .then((data) => {
            dispatch(getDentalTechnicianThunk());
            dispatch(getPatientsThunk())
            message.success('Данные успешно сохранены')
        }).catch((error) => {
        message.error("Ошибка в сохранении данных");
    });
};