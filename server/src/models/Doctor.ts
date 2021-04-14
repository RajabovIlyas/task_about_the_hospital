import {model, Schema, Document} from 'mongoose';
import {IPatient} from "./Patient";

export type InspectionType = {
    dateOfInspection: Date;
    comments: string;
    photos: string;
    inspectionResult: string;
}

export interface IDoctor extends Document {
    diagnosis: string;
    patient: IPatient|string;
    inspection: [InspectionType]
}

export const DoctorSchema: Schema = new Schema({
    diagnosis: {type: String, required: true},
    patient: {type:Schema.Types.ObjectId, ref: 'patient'},
    inspection: {
        type: [{
            dateOfInspection: {type: Date, required: true},
            comments: {type: String, required: true},
            photos:  {type: String, default: 'Здесь должны быть фотографии'},
        }], required: true
    },
});


export default model<IDoctor>('doctor', DoctorSchema);