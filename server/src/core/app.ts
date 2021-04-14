import dotenv from "dotenv";


dotenv.config();

export const secret:string =process.env.JWT_SECRET ? process.env.JWT_SECRET : 'UpFJfpWKYteH5rMHSxst';



export const mongoURL: string =process.env.MONGO_URI ? process.env.MONGO_URI : 'mongodb://localhost:27017/hospital';
export const PORT: number = process.env.PORT ? Number(process.env.PORT) : 5000;