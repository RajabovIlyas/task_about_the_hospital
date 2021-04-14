import React, {useEffect} from "react";
import {Button, Form, Input, Select, Space,DatePicker} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getPatientsThunk} from "../../../store/action/patientAction"
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import {addDoctorThunk} from "../../../store/action/doctorAction";

const {Option} = Select;


const AddExamination = () => {
    const patients = useSelector(state => state.Patients.patients)

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(addDoctorThunk(data))
    }
    useEffect(() => {
        dispatch(getPatientsThunk())
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
            <Form.Item label="Диагноз" name="diagnosis"
                       rules={[
                           {
                               required: true,
                               message: 'Введите данные!',
                           },
                       ]}>
                <Input/>
            </Form.Item>
            <Form.Item label="Пациент" name="patient"
                       rules={[
                           {
                               required: true,
                               message: 'Введите данные!',
                           },
                       ]}>
                <Select
                    showSearch
                    style={{width: 200}}
                    placeholder="Выберите группу"
                >
                    {patients.map(value => (
                        <Option key={value._id} value={value._id}>{value.name} {value.surname}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.List name="inspection">
                {(fields, {add, remove}) => (
                    <div>
                        {fields.map(field => (
                            <Space  key={field.key} direction="vertical" style={{ width: '100%' }}>
                                <Form.Item
                                    {...field}
                                    label="Дата обследования"
                                    name={[field.name, 'dateOfInspection']}
                                    fieldKey={[field.fieldKey, 'dateOfInspection']}
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
                                    label="Коментарии"
                                    name={[field.name, 'comments']}
                                    fieldKey={[field.fieldKey, 'comments']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Введите данные!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                                <MinusCircleOutlined style={{display: 'flex', justifyContent: 'flex-end', paddingRight:'50px'}}
                                                     onClick={() => remove(field.name)}/>
                            </Space>
                        ))}

                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} icon={<PlusOutlined/>}>
                                Добавить Анализ
                            </Button>
                        </Form.Item>
                    </div>
                )}
            </Form.List>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Добавить
                </Button>
            </Form.Item>
        </Form>
    )
}


export default AddExamination;