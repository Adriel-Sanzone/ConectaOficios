import {connection} from '../Database/connection.js';

export const viewEspecializaciones = () =>
{
    return new Promise (function(resolve)
    {
        connection.query(
            'SELECT especializaciones.id, especializaciones.especializacion, categorias.categoria FROM especializaciones JOIN categorias ON especializaciones.id_categoria = categorias.id ORDER BY especializaciones.id_categoria ASC',
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

export const getEspecializacionPerfil = (id_usuario) =>
{
    return new Promise(function(resolve)
    {
        connection.query(
            'SELECT especializaciones.especializacion FROM especializacion_usuario INNER JOIN especializaciones ON especializacion_usuario.id_especializacion = especializaciones.id WHERE especializacion_usuario.id_usuario = ?',
            [id_usuario],
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
    })
}