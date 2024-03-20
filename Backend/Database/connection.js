import mysql from 'mysql2';
import {PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME} from './configuracion.js';

const connection = mysql.createConnection({
  host: DB_HOST,
  port: PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

export {connection}; 