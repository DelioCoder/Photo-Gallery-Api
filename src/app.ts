import express from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index';
import path from 'path'

const app = express();

// Settings

app.set('port', process.env.PORT || 3000)

//middlewares

app.use(morgan('dev'));
app.use(express.json());

//Routes

app.use('/api', indexRoutes);

//This folder for this application will be use to store public files

app.use('/uploads', express.static(path.resolve('uploads')));

export default app;