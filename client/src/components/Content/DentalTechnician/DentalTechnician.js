import React, {useEffect} from 'react';
import {Collapse} from "antd";
import AddDentalTechnician from "./AddDentalTechnician";
import {PaddingTop} from "../../../style/styleDiv";
import {useDispatch, useSelector} from "react-redux";
import {getDentalTechnicianThunk} from "../../../store/action/dentalTechnicianAction";
import ShowDentalTechnician from "./ShowDentalTechnician";

const {Panel}=Collapse;

const DentalTechnician = () => {
    const dentalTechnician=useSelector(state => state.DentalTechnician.dentalTechnician)

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getDentalTechnicianThunk());
    },[])


    return (
        <>
            <Collapse>
                <Panel header="Добавить Лечение" key="1">
                    <AddDentalTechnician/>
                </Panel>
            </Collapse>
            <PaddingTop>
                {dentalTechnician.map(value=>(
                    <ShowDentalTechnician key={value._id} {...value}/>
                ))}
            </PaddingTop>
        </>
    )
}

export default DentalTechnician;