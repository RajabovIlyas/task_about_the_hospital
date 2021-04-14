import {model, Schema, Document} from 'mongoose';
import {IDentalTechnician} from "./DentalTechnician";

export interface IPatient extends Document {
    name: string;
    surname: string;
    email: string;
    number: string;
    dental_technician: [IDentalTechnician|string];
}

export const PatientSchema: Schema = new Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, required: true},
    number: {type: String, required: true},
    dental_technician: [{type: Schema.Types.ObjectId, ref: 'dental_technician'}],
});


export default model<IPatient>('patient', PatientSchema);