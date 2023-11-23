import mysql from 'mysql2';
import {PORT, DB_HOTS, DB_USER, DB_PASSWORD, DB_NAME} from './configuracion.js';

const connection = mysql.createConnection({
  host: PORT,
  port: DB_HOTS,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

export {connection}; 