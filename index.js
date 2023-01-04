import http from 'http';
import dotenv from 'dotenv';
import app from './app/index.js';

dotenv.config();

const port = process.env.PORT ?? 8080;

const server = http.createServer(app);

server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on http://localhost:${port}`);
});
