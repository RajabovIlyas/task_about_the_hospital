import { patientAPI} from "../../api/api";
import {message} from "antd";

export const SET_PATIENTS_DATA='SET_PATIENTS_DATA'

export const setPatientsAction = (data) => ({type: SET_PATIENTS_DATA, data});

export const getPatientsThunk = () => (dispatch) => {
    patientAPI.getAll()
        .then((data) => {
            dispatch(setPatientsAction(data));
        }).catch((error) => {
        message.error("Ошибка в получении данных");
    });
};

export const addPatientThunk = (data) => (dispatch) => {
    patientAPI.create(data)
        .then((data) => {
            dispatch(getPatientsThunk());
            message.success('Данные успешно сохранены')
        }).catch((error) => {
        message.error("Ошибка в сохранении данных");
    });
};