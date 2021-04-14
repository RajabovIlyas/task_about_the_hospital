import React, {useEffect} from "react";
import {Button, Form, Input, Select, Space, DatePicker} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import {getDoctorsThunk} from "../../../store/action/doctorAction";
import {addDentalTechnicianThunk} from "../../../store/action/dentalTechnicianAction";

const {Option} = Select;


const AddDentalTechnician = () => {
    const doctors = useSelector(state => state.Doctor.doctors)

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const doctor=doctors.find(value=>value._id===data.analyzes);
        dispatch(addDentalTechnicianThunk( {...data,patient:doctor.patient._id}));
    }
    useEffect(() => {
        dispatch(getDoctorsThunk())
    }, [])

    const [form] = Form.useForm();

    return (
        <Form
            form={form}
            onFinish={onSubmit}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 10,
            }}
            size={"large"}
            name="addExamination"
            initialValues={{
                remember: true,
            }}
        >
            <Form.Item label="Пациент с диагнозом" name="analyzes"
                       rules={[
                           {
                               required: true,
                               message: 'Введите данные!',
                           },
                       ]}>
                <Select
                    showSearch
                    placeholder="Выберите группу"
                >
                    {doctors.map(value => (
                        <Option key={value._id} value={value._id}>Пациент: {value.patient.name} {value.patient.surname} Диагноз: {value.diagnosis}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.List name="treatments">
                {(fields, {add, remove}) => (
                    <div>
                        {fields.map(field => (
                            <Space key={field.key} direction="vertical" style={{width: '100%'}}>
                                <Form.Item
                                    {...field}
                                    label="Дата прохождения лечения"
                                    name={[field.name, 'dateOfTreatment']}
                                    fieldKey={[field.fieldKey, 'dateOfTreatment']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Введите данные!',
                                        },
                                    ]}
                                >
                                    <DatePicker/>
                                </Form.Item>
                                <Form.Item
                                    {...field}
                                    label="Лечение"
                                    name={[field.name, 'treatment']}
                                    fieldKey={[field.fieldKey, 'treatment']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Введите данные!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <MinusCircleOutlined
                                    style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '50px'}}
                                    onClick={() => remove(field.name)}/>
                            </Space>
                        ))}

                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} icon={<PlusOutlined/>}>
                                Добавить Лечение
                            </Button>
                        </Form.Item>
                    </div>
                )}
            </Form.List>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Сохранить
                </Button>
            </Form.Item>
        </Form>
    )
}


export default AddDentalTechnician;