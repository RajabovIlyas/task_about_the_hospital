import React from "react";
import {Button,Form, Input} from "antd";
import {useDispatch} from "react-redux";
import {addPatientThunk} from "../../../store/action/patientAction";

const AddPatient = () => {
    const dispatch=useDispatch();
    const onSubmit=(data)=>{
        dispatch(addPatientThunk(data))
    }


    return (
        <Form
            onFinish={onSubmit}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
            size={"large"}
            name="basic"
            initialValues={{
                remember: true,
            }}
        >
            <Form.Item label="Имя пациента" name="name"
                       rules={[
                           {
                               required: true,
                               message: 'Введите данные!',
                           },
                       ]}>
                <Input />
            </Form.Item>
            <Form.Item label="Фамилия" name="surname"
                       rules={[
                           {
                               required: true,
                               message: 'Введите данные!',
                           },
                       ]}>
                <Input />
            </Form.Item>
            <Form.Item label="Email" name="email"
                       rules={[
                           {
                               required: true,
                               message: 'Введите данные!',
                           },
                       ]}>
                <Input />
            </Form.Item>
            <Form.Item label="Номер телефона" name="number"
                       rules={[
                           {
                               required: true,
                               message: 'Введите данные!',
                           },
                       ]}>
                <Input />
            </Form.Item>
            <Form.Item style={{display:'flex',justifyContent:'flex-end'}}>
                <Button type="primary" htmlType="submit">
                    Добавить
                </Button>
            </Form.Item>
        </Form>
    )
}


export default AddPatient;