import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Patient from "./components/Content/Patient/Patient";
import Doctor from "./components/Content/Doctor/Doctor";
import DentalTechnician from "./components/Content/DentalTechnician/DentalTechnician";

const App = () => {
    return (
        <Router>
            <Navbar/>
            <div style={{padding: '30px'}}>
                <Switch>
                    <Route path='/dental_technician' component={DentalTechnician}/>
                    <Route path='/doctor' component={Doctor}/>
                    <Route path='/patient' component={Patient}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
