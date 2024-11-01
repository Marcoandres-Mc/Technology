import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import userProducts from './routes/product.routes.js';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Conectado');
})
app.use(cors(
    {
        origin: ['http://localhost:5173', 'http://127.0.0.1:5175'],
        credentials: true
    }
))
app.use('/api', userRoutes);
app.use('', userProducts);
app.use('/api/auth', authRoutes);




export default app;