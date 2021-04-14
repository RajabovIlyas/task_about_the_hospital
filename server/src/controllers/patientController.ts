import {Request, Response} from 'express';
import Patient, {IPatient} from "../models/Patient";


const create = async (req: Request, res: Response) => {
    Patient.create({...req.body})
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({message: 'Ошибка сервера!'}));
}

const change = async (req: Request, res: Response) => {
    Patient.findByIdAndUpdate(req.params.id, {...req.body}).exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({message: 'Ошибка сервера!'}));
}

const getAll = async (req: Request, res: Response) => {
    Patient.find().populate( {path:'dental_technician',populate: {
            path: 'doctor', select:'diagnosis'
        },options: { lean: true }}).exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({message: 'Ошибка сервера!'}));

}

const getById = async (req: Request, res: Response) => {
    Patient.findById(req.params.id).populate('DentalTechnician').exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({message: 'Ошибка сервера!'}));
}

export default {create, change, getAll, getById}