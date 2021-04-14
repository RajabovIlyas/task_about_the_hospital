import {Request, Response} from 'express';
import DentalTechnician, {IDentalTechnician} from "../models/DentalTechnician";
import Patient from "../models/Patient";


const create = async (req: Request, res: Response) => {
    const {patient} = req.body;
    DentalTechnician.create({...req.body})
        .then(result => {
            Patient.findByIdAndUpdate(patient, {$push: {dental_technician: result.id}}).exec()
                .then(result => res.status(200).json(result))
        })
        .catch(err => res.status(500).json({message: 'Ошибка сервера!'}));
}

const change = async (req: Request, res: Response) => {
    DentalTechnician.findByIdAndUpdate(req.params.id, {...req.body}).exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({message: 'Ошибка сервера!'}));
}

const getAll = async (req: Request, res: Response) => {
    DentalTechnician.find().populate({path:'doctor',populate: {
            path: 'patient'
        },options: { lean: true }}).exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({message: 'Ошибка сервера!'}));

}

const getById = async (req: Request, res: Response) => {
    DentalTechnician.findById(req.params.id).populate('Doctor').exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({message: 'Ошибка сервера!'}));
}

export default {create, change, getAll, getById}