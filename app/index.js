import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 8080;
const app = express();

app.get('/', (req, res) => {
    console.log('la');
    res.send('test');
});

app.listen(port, () => {
    console.log(`serveur start on http://localhost:${port}`);
});
