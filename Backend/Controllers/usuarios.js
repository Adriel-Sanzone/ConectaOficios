import { validateRequestWithBody } from 'twilio/lib/webhooks/webhooks.js';
import {connection} from '../Database/connection.js';
import md5 from 'md5';

export const getUsuarios = async (req, res) => 
{
    connection.query(
        'SELECT * FROM usuarios',
        function (err, results) {
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

//Funcion distinta para ver los usuarios con templates
export const viewUsuariosEspecialistas = (pagina) =>
{
    var offset = pagina * 10;
    //Promesa para asegurarme de tener los datos antes de enviarlos
    return new Promise (function(resolve)
    {
        connection.query(
            'SELECT * FROM usuarios WHERE especialista = 1 ORDER BY destacado DESC LIMIT 10 OFFSET ?',
            [offset],
            function (err, results) {
                resolve(results);
            }
        );
    });
}

export const UsuarioLogeandose = async (req, res) => 
{
    //Obtengo los datos ingresados por el usuario
    let {email , password} = req.body;

    //Si el espacio de email estaba vacio
    if(email == "")
    {
        res.json({
            "error": 1,
            "mensaje": "El email esta vacio",
        });
        return false;
    };
    //Si el espacio de contraseña estaba vacio
    if(password == "")
    {
        res.json({
            "error": 1,
            "mensaje": "La contraseña esta vacia",
        });
        return false;
    };

    //Transformo la contraseña a MD5
    password = md5(password);    

    //Realizo la consulta a la base de datos para obtener un usuario que coincida con los valores indicados
    connection.query(
        'SELECT * FROM usuarios WHERE email = ? AND password = ?',
        [email , password],

        function (err, results) 
        {
            if (err) 
            {
                console.error(err);
                res.status(500).json({ error: 'Error al obtener los datos' });
            } else 
            {
                //Si no encuentra ningun usuario con email y contraseña indicados
                if(results[0] === undefined)
                {
                    res.json({
                        "error": 1,
                        "mensaje": "La contraseña o el email son incorrectos"
                    })
                } else  //Si encuentra un usuario que coincida con el email y contraseña indicados
                { 
                    var usuario = results[0];
                    //Creo un token para este usuario
                    var getToken = CrearToken();
                    //Tras la resolucion de la promesa de la funcion CrearToken(), continuo la ejecucion por medio del "then" dentro de una funcion
                    getToken.then(function(token)
                    {
                        //Agrego este nuevo token a la columna de su usuario correspondiente
                        connection.query('UPDATE usuarios SET token = ? WHERE id = ?' , 
                        [token , usuario.id])

                        //Guardo los datos clave para validar en session de express
                        req.session.idUsuario = usuario.id;
                        req.session.token = token;

                        res.json({
                            "error": 0,
                            "usuario": results[0],
                            "token": token,
                        });
                    });
                }
            }
        }
    );
};

export const getUsuario = (id) =>
{
    return new Promise (function(resolve)
    {
        connection.query(
            'SELECT * FROM usuarios WHERE id = ?',
            [id],
            function (err, results) 
            {
                if (err) 
                {
                    console.error(err);
                    res.status(500).json({ error: 'Error al obtener los datos' });
                } else 
                {
                    if(results[0] === undefined)
                    {
                        resolve(false);
                    } else  
                    {
                        resolve(results[0]);
                    }
                }
            }
        );
    });
}

export const UsuarioValidado = async (req, res) => 
{
    //Obtengo los datos almacenados en la SesionStorage
    const {token, id} = req.body;

    //Realizo una consulta para buscar si este token existe en algun usuario
    connection.query(
        'SELECT * FROM usuarios WHERE token = ? AND id = ?',
        [token, id],

        function (err, results) 
        {
            if (err) 
            {
                console.error(err);
                res.status(500).json({ error: 'Error al obtener los datos' });
            } else 
            {
                //Si no encuentro ningun usuario con el token de la SesionStorage
                if(results[0] === undefined)
                {
                    res.json({
                        "error": 1,
                        "mensaje": "Ocurrio un error en la validacion",
                    })
                } else  //Si encuentro un usuario con el mismo token que el de la SesionStorage
                {
                    res.json({
                        "error": 0,
                    })
                }
            }
        }
    );
};

export const UsuarioLogeado = (id, token) =>
{
    //Creo promesa para comprobar que el usuario este logeado
    return new Promise (function(resolve)
    {
        //Compruebo el id y token del session de express con la base de datos
        var res;
        connection.query(
            'SELECT * FROM usuarios WHERE id = ? AND token = ?',
            [id, token],
            function (err, results) 
            {
                if (err) 
                {
                    console.error(err);
                    res.status(500).json({ error: 'Error al obtener los datos' });
                } else 
                {
                    if(results[0] === undefined)
                    {
                        resolve(false);
                    } else  //Si encuentro un usuario con el mismo token que el de la session de express
                    {
                        resolve(results[0]);
                    }
                }
            }
        );
    });
}

export const RegistroUsuario = async (req, res) => 
{
    //Obtengo los datos ingresados por el usuario
    let {nombre, apellido, contacto, email, password, especialista, direccion, descripcion} = req.body;
    const perfil_sin_foto = '/Frontend/uploads/usuario-sin-foto.png';
    const portada_sin_foto = '/Frontend/uploads/portada-sin-foto.png';

    //Si el espacio de email estaba vacio
    if(email == "")
    {
        res.json({
            "error": 1,
            "mensaje": "El email esta vacio",
        });
        return false;
    };
    //Si el espacio de contraseña estaba vacio
    if(password == "")
    {
        res.json({
            "error": 1,
            "mensaje": "La contraseña esta vacia",
        });
        return false;
    };
    //Si el espacio de nombre estaba vacio
    if(nombre == "")
    {
        res.json({
            "error": 1,
            "mensaje": "El nombre esta vacio",
        });
        return false;
    };
    //Si el espacio de apellido estaba vacio
    if(apellido == "")
    {
        res.json({
            "error": 1,
            "mensaje": "El apellido esta vacio",
        });
        return false;
    };
    //Si el espacio de contacto estaba vacio
    if(contacto == "" && especialista != 0)
    {
        res.json({
            "error": 1,
            "mensaje": "El contacto esta vacio",
        });
        return false;
    };
    //Si el espacio de direccion estaba vacio habiendo marcado que quiere ser especialista
    if(direccion == "" && especialista != 0)
    {
        res.json({
            "error": 1,
            "mensaje": "El direccion esta vacio",
        });
        return false;
    };

    //Llamo a una funcion que verifica que el email no este registrado en mi base de datos
    const EmailValidado = ComprueboEmailExistente(email);
    
    //Continuo la ejecucion cuando la funcion que verifica email repetido termine con then
    EmailValidado.then(function(r)
    {
        //Si esta registrado previamente
        if(r == 1)
        {
            res.json({
                "error": 1,
                "mensaje": "El email ya esta registrado",
            });
        } else //No estaba registrado
        {
            //Transformo su contraseña a MD5
            password = md5(password);

            //Creo la consulta para agregar el nuevo usuario con los datos clave
            connection.query(
                'INSERT usuarios (email, password, nombre, apellido, contacto, especialista, direccion, descripcion, path, path_portada) VALUES (?,?,?,?,?,?,?,?,?,?)',
                [email, password, nombre, apellido, contacto, especialista, direccion, descripcion, perfil_sin_foto, portada_sin_foto],
        
                function (err, results) 
                {
                    if (err) 
                    {
                        console.error(err);
                        res.status(500).json({ error: 'Error al obtener los datos' });
                    } else 
                    {
                        connection.query(
                        'SELECT * FROM usuarios WHERE email = ? and password = ?',
                        [email, password],
                        function(err, usuario_registrado)
                        {
                            //Guardo los datos clave para validar en session de express
                            req.session.idUsuario = usuario_registrado[0].id;
    
                            //Devuelvo que NO hay error
                            res.json({
                                "error": 0,
                            })
                        })
                    }
                }
            );
        }
    })
};

export const AsignoEspecializacion = async (req, res) =>
{
    let {id_usuario, id_especializacion} = req.body;

    //Si el espacio de especializacion estaba vacio
    if(id_especializacion == "")
    {
        res.json({
            "error": 1,
            "mensaje": "No se selecciono especializacion",
        });
        return false;
    };

    //Si el espacio no esta vacio inserto la especialidad junto al id del usuario
    connection.query(
        'INSERT INTO especializacion_usuario (id_usuario, id_especializacion) VALUES (?,?)',
        [id_usuario, id_especializacion],
        function(err, results)
        {
            if (err) 
            {
                console.error(err);
                res.status(500).json({ error: 'Error al obtener los datos' });
            } else 
            {
                //Devuelvo que NO hay error
                res.json({
                    "error": 0,
                })
            }    
        }
    )
}


export const InsertoImagenPerfil = async (req, res) => 
{
    const id_usuario = (req.session.idUsuario || 0);

    //Obtengo el nombre de la imagen por multer
    const filename = '/Frontend/uploads/' + req.file.filename;

    //Inserto la ruta donde esta guardada la imagen en la base de datos
    connection.query(
        'UPDATE usuarios SET path = ? WHERE id = ?',
        [filename, id_usuario],
        function (err, results) {
            if (err) 
            {
                console.error(err);
                res.status(500).json({ error: 'Error al obtener los datos' });
            } else 
            {
                res.json({
                    "error": 0,
                });
            }
        }
    );
};

export const InsertoImagenPortada = async (req, res) => 
{
    const id_usuario = (req.session.idUsuario || 0);

    //Obtengo el nombre de la imagen por multer
    const filename = '/Frontend/uploads/' + req.file.filename;

    //Inserto la ruta donde esta guardada la imagen en la base de datos
    connection.query(
        'UPDATE usuarios SET path_portada = ? WHERE id = ?',
        [filename, id_usuario],
        function (err, results) {
            if (err) 
            {
                console.error(err);
                res.status(500).json({ error: 'Error al obtener los datos' });
            } else 
            {
                res.json({
                    "error": 0,
                });
            }
        }
    );
};

function CrearToken()
{
    var numero = Math.floor(Math.random() * 200000);
    var token = md5(numero);

    //Creo y retorno una promesa para esperar la ejecucion de la consulta a la base de datos. Una vez terminado puedo obter el resultado por el resolve (se devuelve el valor indicado) o por reject (si es rechazada)
    return new Promise(function(resolve)
    {
        connection.query('SELECT * FROM usuarios WHERE token = ?' , 
        [token],
        function(err, results)
        {
            if(results[0] === undefined)
            {
                //Una vez finalizado y sin encontrar token repetido, resuelvo la promesa devolviendo "token"
                resolve(token);
            } else
            {
                //Una vez finalizado y encontrando un token repetido, resuelvo la promesa llamando nuevamente la funcion
                resolve(CrearToken);
            }
        })
    });
}

function ComprueboEmailExistente(email)
{
    return new Promise(function(resolve)
    {
        connection.query('SELECT * FROM usuarios WHERE email = ?',
        [email],
        function(err, results)
        {
            if (results[0] === undefined)
            {
                resolve(0);
            } else
            {
                resolve(1);
            }
        });
    });
}

export const viewsTodosLosUsuarios = (pagina) =>
{
    var offset = pagina * 10;
    //Promesa para asegurarme de tener los datos antes de enviarlos
    return new Promise (function(resolve)
    {
        //Query para obtener todos los usuarios especialistas ordenados por promocion
        connection.query(
            'SELECT * FROM usuarios WHERE especialista = 1 ORDER BY destacado DESC LIMIT 10 OFFSET ?',
            [offset],
            function (err, resultados) {
                //Creo array para almacenar los usuarios coincidentes
                var usuarios = new Array();
                //Creo un array para almacenar las Promises que rellenaran una variable de "usuarios"
                var misPromesas = new Array();

                //Recorro el array usuarios 
                resultados.forEach(function(usuario){
                    //Le agrego los valores obtenidos del query
                    usuarios[usuario.id] = usuario;
                    //Creo una variable que obtenga todos los resultados de especializacion que coincidan con cada usuario
                    var especializaciones = getEspecializacionesUsuario(usuario.id);
                    //Añado cada resultado de promesa a misPromesas
                    misPromesas.push(especializaciones);
                    
                });

                //Luego que terminen todas las promesas de misPromesas recorro usuarios para añadirle la nueva variable
                Promise.all(misPromesas)
                    .then((especializaciones) => {
                        especializaciones.forEach(function(especializacion){
                            usuarios[especializacion[0].id_usuario].especializaciones = especializacion;
                        });
                        //Resuelvo usuarios que ahora contiene los datos del usuario y su especializacion
                        resolve(usuarios);
                    })
                    //Si ocurre algun error
                    .catch((error) => {
                        console.error(error);
                    });
            }
        );
    });
}

function getEspecializacionesUsuario(id_usuario) {
    return new Promise (function(resolve)
    {
        //Obtengo el nombre de la especializacion correspondiente por medio del id del usuario
        var sql = 'SELECT EU.*, IF(E.especializacion IS NULL, "", E.especializacion) as nombre FROM especializacion_usuario EU LEFT JOIN especializaciones E ON (E.id = EU.id_especializacion) WHERE id_usuario = ? ';
        connection.query(sql,
            [id_usuario],
            function (err, especializaciones) {
                resolve(especializaciones);
            }
        );
    });
}
