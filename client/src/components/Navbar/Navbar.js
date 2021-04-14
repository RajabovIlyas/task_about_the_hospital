import React from 'react';
import {Menu} from 'antd'
import {Link} from "react-router-dom";

const Navbar = () => {


    return (
        <Menu mode="horizontal">

            <Menu.Item key="patient">
                <Link to={'/patient'}>
                    Пациеты
                </Link>
            </Menu.Item>

            <Menu.Item key="doctor">
                <Link to={'/doctor'}>
                    Доктор
                </Link>
            </Menu.Item>
            <Menu.Item key="dental_technician">
                <Link to={'/dental_technician'}>
                    Зубной техник
                </Link>
            </Menu.Item>
        </Menu>
    )
}

export default Navbar;