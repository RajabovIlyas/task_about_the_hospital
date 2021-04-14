import {Request, Response} from 'express';
import Doctor, {IDoctor} from "../models/Doctor";


const create = async (req: Request, res: Response) => {
    Doctor.create({...req.body})
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({message: 'Ошибка сервера!'}));
}

const change = async (req: Request, res: Response) => {
    Doctor.findByIdAndUpdate(req.params.id, {...req.body}).exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({message: 'Ошибка сервера!'}));
}

const getAll = async (req: Request, res: Response) => {
    Doctor.find().populate('patient').exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({message: 'Ошибка сервера!'}));

}

const getById = async (req: Request, res: Response) => {
    Doctor.findById(req.params.id).populate('patient').exec()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({message: 'Ошибка сервера!'}));
}

export default {create, change, getAll, getById}