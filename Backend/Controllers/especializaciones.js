import {connection} from '../Database/connection.js';

export const viewEspecializaciones = () =>
{
    return new Promise (function(resolve)
    {
        connection.query(
            'SELECT * FROM especializaciones',
            function (err, results) {
                resolve(results);
            }
        );
    });
}

export const viewEspecializacionUsuario = () =>
{
    return new Promise (function(resolve)
    {
        connection.query(
            'SELECT * FROM especializacion_usuario',
            function (err, results) {
                resolve(results);
            }
        );
    });
}

export const getEspecializacionPerfil = (id) =>
{
    return new Promise(function(resolve)
    {
        connection.query(
            'SELECT FROM especializacion_usuario AS e WHERE id_usuario = ?',
            [id],
            function(err, results)
            {
                var coincidencias = results; 
                if(err)
                {
                    console.log(err);
                } else
                {
                    connection.query(
                        'SELECT FROM especializaciones WHERE id = ?',
                        [coincidencias.id_especializacion],
                        function(err, results)
                        {
                            if (err)
                            {
                                console.log(err);
                            } else
                            {
                                resolve(results);
                            }
                        }
                    )
                }
            }
        )
    })
}