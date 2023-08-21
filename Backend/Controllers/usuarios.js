import {connection} from '../Database/connection.js';

export const getUsuarios = async (req, res) => 
{
    connection.query
    (
        'SELECT * FROM usuarios',
        function (err, results, fields) 
        {
            if (err) 
            {
            console.error(err);
            res.status(500).json({ error: 'Error al obtener los datos' });
            } else 
            {
            res.json(results);
            }
        }
    );
};
  