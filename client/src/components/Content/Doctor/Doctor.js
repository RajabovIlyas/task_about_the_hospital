import React, {useEffect} from 'react';
import {Collapse} from "antd";
import AddExamination from "./AddExamination";
import {useDispatch, useSelector} from "react-redux";
import {PaddingTop} from "../../../style/styleDiv";
import ShowDoctor from "./ShowDoctor";
import {getDoctorsThunk} from "../../../store/action/doctorAction";

const {Panel} = Collapse;

const Doctor = () => {
    const doctors=useSelector(state => state.Doctor.doctors)

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getDoctorsThunk());
    },[])

    return (
        <>
            <Collapse>
                <Panel header="Добавить Диагноз" key="1">
                    <AddExamination/>
                </Panel>
            </Collapse>
            <PaddingTop>
                {doctors.map(value=>(
                    <ShowDoctor key={value._id} {...value}/>
                ))}
            </PaddingTop>
        </>
    )
}

export default Doctor;