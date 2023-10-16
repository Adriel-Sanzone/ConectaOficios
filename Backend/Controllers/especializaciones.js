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

export const viewEspecializacionesNueva = () =>
{
    return new Promise (function(resolve)
    {

        var sql = "SELECT * FROM categorias";
        connection.query(
            sql,
            function (err, results) {
               //Creo array para almacenar las categorias coincidentes
               var categorias = new Array();
               //Creo un array para almacenar las Promises que rellenaran una variable de "categorias"
               var misPromesas = new Array();

               //Recorro el array categorias 
               results.forEach(function(categoria){
                    
                   //Le agrego los valores obtenidos del query
                   categorias[categoria.id] = categoria;
                   //Creo una variable que obtenga todos los resultados de especializacion que coincidan con cada usuario
                   var especializaciones = getEspecializacionesByCategorias(categoria.id);
                   //Añado cada resultado de promesa a misPromesas
                   misPromesas.push(especializaciones);
                   
               });

               //Luego que terminen todas las promesas de misPromesas recorro categorias para añadirle la nueva variable
               Promise.all(misPromesas)
                   .then((especializaciones) => {
                       especializaciones.forEach(function(especializacion){
                        categorias[especializacion[0].id_categoria].especializaciones = especializacion;
                       });
                       //Resuelvo categorias que ahora contiene los datos del especializacion y su categoria con id
                       resolve(categorias);
                   })
                   //Si ocurre algun error
                   .catch((error) => {
                       console.error(error);
                   });
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
        var sql = "SELECT eu.id_especializacion, e.especializacion, c.categoria ";
        sql += "FROM especializacion_usuario eu ";
        sql += "INNER JOIN especializaciones e ON eu.id_especializacion = e.id ";
        sql += "INNER JOIN categorias c ON e.id_categoria = c.id ";
        sql += "WHERE eu.id_usuario = ? ";

        connection.query(
            sql,
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

function getEspecializacionesByCategorias(id_categoria) {
    return new Promise (function(resolve)
    {
        //Obtengo la especializacion correspondiente por medio del id de la cateogira
        var sql = 'SELECT especializaciones.id, especializaciones.especializacion, categorias.categoria, especializaciones.id_categoria FROM especializaciones JOIN categorias ON especializaciones.id_categoria = categorias.id WHERE categorias.id = ? ORDER BY especializaciones.id_categoria ASC';
        connection.query(sql,
            [id_categoria],
            function (err, especializaciones) {
                resolve(especializaciones);
            }
        );
    });
}