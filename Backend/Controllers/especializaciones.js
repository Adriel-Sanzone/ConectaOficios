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
               //Creo array para almacenar los usuarios coincidentes
               var categorias = new Array();
               //Creo un array para almacenar las Promises que rellenaran una variable de "usuarios"
               var misPromesas = new Array();

               //Recorro el array usuarios 
               results.forEach(function(categoria){
                    
                   //Le agrego los valores obtenidos del query
                   categorias[categoria.id] = categoria;
                   //Creo una variable que obtenga todos los resultados de especializacion que coincidan con cada usuario
                   var especializaciones = getEspecializacionesByCategorias(categoria.id);
                   //Añado cada resultado de promesa a misPromesas
                   misPromesas.push(especializaciones);
                   
               });

               //Luego que terminen todas las promesas de misPromesas recorro usuarios para añadirle la nueva variable
               Promise.all(misPromesas)
                   .then((especializaciones) => {
                       especializaciones.forEach(function(especializacion){
                        console.log(especializacion);
                        categorias[especializacion[0].id_categoria].especializaciones = especializacion;
                       });
                       //Resuelvo usuarios que ahora contiene los datos del usuario y su especializacion
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

function getEspecializacionesByCategorias(id_categoria) {
    return new Promise (function(resolve)
    {
        //Obtengo el nombre de la especializacion correspondiente por medio del id del usuario
        var sql = 'SELECT especializaciones.id, especializaciones.especializacion, categorias.categoria, especializaciones.id_categoria FROM especializaciones JOIN categorias ON especializaciones.id_categoria = categorias.id WHERE categorias.id = ? ORDER BY especializaciones.id_categoria ASC';
        connection.query(sql,
            [id_categoria],
            function (err, especializaciones) {
                resolve(especializaciones);
            }
        );
    });
}