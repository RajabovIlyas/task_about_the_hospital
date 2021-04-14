import React from 'react';
import {Descriptions, Typography} from 'antd';
import {BorderDiv} from "../../../style/styleDiv";

const {Title} = Typography;


const ShowPatient = (props) => {


    return (
        <BorderDiv>
            <Descriptions title={props.name + ' ' + props.surname} size={'middle'}>
                <Descriptions.Item label="Номер телефона">{props.number}</Descriptions.Item>
                <Descriptions.Item label="Email">{props.email}</Descriptions.Item>
            </Descriptions>
            {props.dental_technician.length != 0 ? (
                <>
                    <Title level={5}>Лечение</Title>
                    {props.dental_technician.map(value=>(
                    <BorderDiv key={value._id}>
                        <Descriptions title={'Лечение от: '+value.doctor.diagnosis} size={'middle'}>
                    {value.treatments.map(value1 => (
                        <>
                                <Descriptions.Item
                                    label="Дата Лечения">{value1.dateOfTreatment.slice(0, 10)}</Descriptions.Item>
                                <Descriptions.Item label="Лечение">{value1.treatment}</Descriptions.Item>
                            </>

                    ))}
                            </Descriptions>
                    </BorderDiv>
                    ))}
                </>
            ) : null}

        </BorderDiv>
    )
}

export default ShowPatient;