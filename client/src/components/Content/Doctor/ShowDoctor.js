import React from 'react';
import {Descriptions,Typography} from 'antd';
import {BorderDiv} from "../../../style/styleDiv";

const { Title } = Typography;

const ShowDoctor=(props)=>{

    return(
        <BorderDiv>
            <Descriptions title={props.patient.name+' '+ props.patient.surname} size={'middle'}>
                <Descriptions.Item label="Номер телефона">{props.patient.number}</Descriptions.Item>
                <Descriptions.Item label="Email">{props.patient.email}</Descriptions.Item>
                <Descriptions.Item label="Диагноз">{props.diagnosis}</Descriptions.Item>
            </Descriptions>
            <Title level={5}>Заметки</Title>
            {props.inspection.map(value=>(
                <BorderDiv key={value._id}>
                    <Descriptions size={'middle'}>
                        <Descriptions.Item label="Дата посещения">{value.dateOfInspection.slice(0,10)}</Descriptions.Item>
                        <Descriptions.Item label="Коментарии">{value.comments}</Descriptions.Item>
                    </Descriptions>
                </BorderDiv>
            ))}
        </BorderDiv>
    )
}

export default ShowDoctor;