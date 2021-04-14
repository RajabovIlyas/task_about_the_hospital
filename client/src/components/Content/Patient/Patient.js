import React, {useEffect} from "react";
import styled from 'styled-components'

import {Collapse} from "antd";
import AddPatient from "./AddPatient";
import {useDispatch, useSelector} from "react-redux";
import {getPatientsThunk} from "../../../store/action/patientAction";
import ShowPatient from "./ShowPatient";
import {PaddingTop} from "../../../style/styleDiv";

const {Panel} = Collapse;



const Patient = () => {
    const patients = useSelector(state => state.Patients.patients);

    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(getPatientsThunk())
    },[])

    return (
        <>
            <Collapse>
                <Panel header="Добавить Пациента" key="1">
                    <AddPatient/>
                </Panel>
            </Collapse>
            <PaddingTop>
                {patients.map(value=>(
                    <ShowPatient key={value._id} {...value}/>
                ))}
            </PaddingTop>
        </>
    )
}

export default Patient;