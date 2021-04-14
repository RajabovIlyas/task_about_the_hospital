import {model, Schema, Document} from 'mongoose';
import {IDoctor} from "./Doctor";

export type TreatmentType = {
    dateOfTreatment: Date;
    treatments: string;
}

export interface IDentalTechnician extends Document {
    doctor: IDoctor|string;
    treatment: [TreatmentType]
}

export const DentalTechnicianSchema: Schema = new Schema({
    doctor: {type:Schema.Types.ObjectId, ref: 'doctor'},
    treatments: {
        type: [{
            dateOfTreatment: {type: Date, required: true},
            treatment: {type: String, required: true},
        }], required: true
    },
});


export default model<IDentalTechnician>('dental_technician', DentalTechnicianSchema);