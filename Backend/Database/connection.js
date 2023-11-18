import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'u615526898_admin_adriel',
  password: 'ProyectoRePiola123',
  database: 'u615526898_conectaoficios'
});

export {connection}; 