import { doctorAPI} from "../../api/api";
import {message} from "antd";

export const SET_DOCTORS_DATA='SET_DOCTORS_DATA'

export const setDoctorsAction = (data) => ({type: SET_DOCTORS_DATA, data});

export const getDoctorsThunk = () => (dispatch) => {
    doctorAPI.getAll()
        .then((data) => {
            dispatch(setDoctorsAction(data));
        }).catch((error) => {
        message.error("Ошибка в получении данных");
    });
};

export const addDoctorThunk = (data) => (dispatch) => {
    doctorAPI.create(data)
        .then((data) => {
            dispatch(getDoctorsThunk());
            message.success('Данные успешно сохранены')
        }).catch((error) => {
        message.error("Ошибка в сохранении данных");
    });
};