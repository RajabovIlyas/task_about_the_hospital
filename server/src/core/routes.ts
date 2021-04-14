import {Request,Response,Router} from "express";
import patientController from "../controllers/patientController";
import doctorController from "../controllers/doctorController";
import dentalTechnicianController from "../controllers/dentalTechnicianController";

const createRoutes = (app: Router) => {

    app.get("/", (req: Request, res: Response) => {
        res.send("Hello, World!");
    });
    //Работа с Пациентами
    app.get('/api/patient',patientController.getAll)
    app.get('/api/patient/:id',patientController.getById)
    app.post('/api/patient',patientController.create)
    app.put('/api/patient/:id',patientController.change)

    //Работа с Докторами
    app.get('/api/doctor',doctorController.getAll)
    app.get('/api/doctor/:id',doctorController.getById)
    app.post('/api/doctor',doctorController.create)
    app.put('/api/doctor/:id',doctorController.change)

    //Работа с Зубным Техником
    app.get('/api/dental_technician',dentalTechnicianController.getAll)
    app.get('/api/dental_technician/:id',dentalTechnicianController.getById)
    app.post('/api/dental_technician',dentalTechnicianController.create)
    app.put('/api/dental_technician/:id',dentalTechnicianController.change)
};

export default createRoutes;