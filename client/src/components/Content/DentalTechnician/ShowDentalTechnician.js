import React from 'react';
import {Descriptions,Typography} from 'antd';
import {BorderDiv} from "../../../style/styleDiv";

const { Title } = Typography;

const ShowDentalTechnician=(props)=>{

    return(
        <BorderDiv>
            <Descriptions title={'Пациент: '+props.doctor.patient.name+' '+props.doctor.patient.surname} size={'middle'}>
                <Descriptions.Item label="Диагноз">{props.doctor.diagnosis}</Descriptions.Item>
            </Descriptions>
            <Title level={5}>Лечение</Title>
            {props.treatments.map(value=>(
                <BorderDiv key={value._id}>
                    <Descriptions size={'middle'}>
                        <Descriptions.Item label="Дата Лечения">{value.dateOfTreatment.slice(0,10)}</Descriptions.Item>
                        <Descriptions.Item label="Лечение">{value.treatment}</Descriptions.Item>
                    </Descriptions>
                </BorderDiv>
            ))}
        </BorderDiv>
    )
}

export default ShowDentalTechnician;