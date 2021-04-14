import express from 'express';
import mongoose from 'mongoose';
import createRoutes from './core/routes';
import customizationExpress from './core/express';
import {mongoURL,PORT} from "./core/app";




const app = express();

customizationExpress(app)
createRoutes(app);





mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server started: http://localhost:${PORT}`);
    });
}).catch(err => console.log(err));