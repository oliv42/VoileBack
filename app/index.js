import express from 'express';
import router from './routes/index.js';
import cors from 'cors'

const app = express();

app.use(cors({ origin: process.env.CORS_DOMAINS ?? '*' }));
app.use(router);

export default app;
