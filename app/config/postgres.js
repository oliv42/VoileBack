import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config();

let config;
if (process.env.NODE_ENV === 'production') {
  config = {
    connectionString: process.env.DATABASE_URL_PRODUCTION,
    ssl: { rejectUnauthorized: false },
  };
}else {
    let databaseDev = `pg://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}`
    +`@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
    console.log(databaseDev)
    config = {
        connectionString: databaseDev,
        ssl: { rejectUnauthorized: false },
      };
}

let client = new Pool(config);

export default client;
