import { Router } from 'express';
import { viewUsuariosEspecialistas, UsuarioLogeado, getUsuario, viewsTodosLosUsuarios, viewProyectos, getReseñaHabilitada, viewReseñasPerfil} from '../Controllers/usuarios.js'
import { viewEspecializacionUsuario, viewEspecializaciones, getEspecializacionPerfil, viewEspecializacionesNueva } from '../Controllers/especializaciones.js';
import { connection } from '../Database/connection.js';

const router = Router();

router.get('/', function (req, res) {

    var idUsuario = (req.session.idUsuario || 0);
    var tokenUsuario = (req.session.token || 0);

    var usuarioLogeado = UsuarioLogeado(idUsuario, tokenUsuario);

    var usuariosEspecialistas = viewUsuariosEspecialistas(0);
    var especializaciones = viewEspecializaciones();
    var especializacionUsuario = viewEspecializacionUsuario();
    usuariosEspecialistas.then(function (usuarios) {
        especializaciones.then(function (especializacion) {
            especializacionUsuario.then(function (userEspecializacion) {
                usuarioLogeado.then(function (userLogeado) {
                    res.render("../Frontend/views/pages/index", {
                        "usuariosEsp": usuarios,
                        "especializacion": especializacion,
                        "especializacionUsuario": userEspecializacion,
                        "usuarioLogeado": userLogeado,
                        "user_id": idUsuario,
                    });
                })
            })
        })
    })
});

router.get('/iniciarSesion', function (req, res) {
    res.render('../Frontend/views/pages/iniciarSesion')
});

router.get('/oficios/:pag', function (req, res) {

    var categoria = req.query.categoria || "";
    var pagina = req.params.pag;
    var idUsuario = (req.session.idUsuario || 0);
    var tokenUsuario = (req.session.token || 0);

    var usuarioLogeado = UsuarioLogeado(idUsuario, tokenUsuario);

    //var usuariosEspecialistas = viewUsuariosEspecialistas(pagina);
    var usuariosEspecialistas = viewsTodosLosUsuarios(pagina, categoria);

    //var especializaciones = viewEspecializaciones();
    var especializaciones = viewEspecializacionesNueva();
    usuariosEspecialistas.then(function (usuarios) {
        especializaciones.then(function (especializacion) {
            usuarioLogeado.then(function (logeado) {

                usuarios.sort(function(a, b){
                    return a.destacado - b.destacado;
                })
                usuarios.reverse();

                res.render("../Frontend/views/pages/oficios", {
                    "usuariosEsp": usuarios,
                    "especializacion": especializacion,
                    "usuarioLogeado": logeado,
                    "pag": pagina,
                    "user_id": idUsuario,
                });
            })
        })
    })
});

router.get('/registro', function (req, res) {
    var especializaciones = viewEspecializaciones()
    especializaciones.then(function (especializacion) {
        res.render("../Frontend/views/pages/registro", {
            "especializacion": especializacion,
        });
    })
});

router.get('/registro2', function (req, res) {
    res.render('../Frontend/views/pages/registro2')
});

router.get('/perfil/:id', function (req, res) {

    var idUsuario = (req.session.idUsuario || 0);
    var tokenUsuario = (req.session.token || 0);

    var usuarioLogeado = UsuarioLogeado(idUsuario, tokenUsuario);

    var idPerfil = req.params.id;
    var idUsuario = (req.session.idUsuario || 0);
    var usuarioPerfil = getUsuario(idPerfil);
    var especializacionPerfil = getEspecializacionPerfil(idPerfil);
    var proyectosPerfil = viewProyectos(idPerfil);
    var especializaciones = viewEspecializaciones();
    var reseñaHabilitada = getReseñaHabilitada(idUsuario,idPerfil);
    var reseñasPerfil = viewReseñasPerfil(idPerfil);

    usuarioPerfil.then(function (usuario) {
        especializacionPerfil.then(function (perfilEsp) {
            usuarioLogeado.then(function (logeado) {
                proyectosPerfil.then(function (proyectos) {
                    especializaciones.then(function (especializacion) {
                        reseñaHabilitada.then(function(habilitada) { 
                            reseñasPerfil.then(function(reseñas) {
                                
                                console.log("user")
                                console.log(usuario)
                                console.log("perfilEsp")
                                console.log(perfilEsp)
                                console.log("especializacion")
                                console.log(especializacion)
        
                                res.render('../Frontend/views/pages/perfil', {
                                    "user": usuario,
                                    "id": idUsuario,
                                    "perfilEsp": perfilEsp,
                                    "usuarioLogeado": logeado,
                                    "proyectos": proyectos,
                                    "especializacion": especializacion,
                                    "puedeReseñar": habilitada,
                                    "reseñas": reseñas,
                                });
                            })
                        })
                    })
                })
            })
        })

    })
});

router.get('/admin', function (req, res) {
    let cantCategorias, cantEspecializaciones, cantUsuarios;

    // Consulta SQL para contar los registros en las tablas
    const queryCategorias = 'SELECT COUNT(*) AS total FROM categorias';
    connection.query(queryCategorias, (error1, results1) => {
        if (error1) {
            console.error('Error al contar los registros en categorias:', error1);
            res.status(500).send('Error al contar los registros en categorias');
            return;
        }
        cantCategorias = results1[0].total;

        
        const queryEspecializaciones = 'SELECT COUNT(*) AS total FROM especializaciones';
        connection.query(queryEspecializaciones, (error2, results2) => {
            if (error2) {
                console.error('Error al contar los registros en especializaciones:', error2);
                res.status(500).send('Error al contar los registros en especializaciones');
                return;
            }
            cantEspecializaciones = results2[0].total;

            
            const queryUsuarios = 'SELECT COUNT(*) AS total FROM usuarios';
            connection.query(queryUsuarios, (error3, results3) => {
                if (error3) {
                    console.error('Error al contar los registros en usuarios:', error3);
                    res.status(500).send('Error al contar los registros en usuarios');
                    return;
                }
                cantUsuarios = results3[0].total;

                
                res.render('../Frontend/views/pages/admin.ejs', {
                    cantCategorias,
                    cantEspecializaciones,
                    cantUsuarios,
                });
            });
        });
    });
});

router.get('/destacar', function (req, res) {

    var idUsuario = (req.session.idUsuario || 0);
    var tokenUsuario = (req.session.token || 0);

    var usuarioLogeado = UsuarioLogeado(idUsuario, tokenUsuario);

    usuarioLogeado.then(function (userLogeado) {
    res.render('../Frontend/views/pages/destacar', {
        "usuarioLogeado": userLogeado,
    })
    })
});

//tablas del admin

router.get('/categorias', (req, res) => {
    connection.query('SELECT * FROM categorias', (error, results) => {
        if (error) {
            console.error('Error al obtener los nombres de las tablas:', error);
            res.status(500).send('Error al obtener los nombres de las tablas');
            return;
        }
        res.render('../Frontend/views/pages/tablas-admin/categorias', { categorias: results }); // Renderiza la vista EJS con los nombres de las tablas
    });
});

// router.get('/categorias', (req, res) => {
//     const queryCategorias = 'SELECT * FROM categorias';
//     const resultados = {};
//     connection.query(queryCategorias, (errorCategorias, resultadosCategorias) => {
//         if (errorCategorias) {
//             console.error('Error al obtener los datos de la tabla "Categorias":', errorCategorias.stack);
//             res.sendStatus(500); // Envía una respuesta de error al cliente
//             return;
//         }
//         resultados.categorias = resultadosCategorias;
//         res.render('categorias', { datos: resultados });
//     })
// })

router.get('/especializaciones', (req, res) => {
    connection.query('SELECT * FROM especializaciones', (error, results) => {
        if (error) {
            console.error('Error al obtener los nombres de las tablas:', error);
            res.status(500).send('Error al obtener los nombres de las tablas');
            return;
        }
        res.render('../Frontend/views/pages/tablas-admin/especializaciones', { especializaciones: results }); // Renderiza la vista EJS con los nombres de las tablas
    });
});

router.get('/especializacionDeUsuario', function (req, res) {
    connection.query('SELECT * FROM especializacion_usuario', (error, results) => {
        if (error) {
            console.error('Error al obtener los nombres de las tablas:', error);
            res.status(500).send('Error al obtener los nombres de las tablas');
            return;
        }
        res.render('../Frontend/views/pages/tablas-admin/especializacionDeUsuario', { especializacionUsuario: results }); // Renderiza la vista EJS con los nombres de las tablas
    });

});

router.get('/proyectos', (req, res) => {
    connection.query('SELECT * FROM proyectos', (error, results) => {
        if (error) {
            console.error('Error al obtener los nombres de las tablas:', error);
            res.status(500).send('Error al obtener los nombres de las tablas');
            return;
        }
        res.render('../Frontend/views/pages/tablas-admin/proyectos', { proyectos: results }); // Renderiza la vista EJS con los nombres de las tablas
    });
});

router.get('/usuariosAdmin', (req, res) => {
    connection.query('SELECT * FROM usuarios', (error, results) => {
        if (error) {
            console.error('Error al obtener los nombres de las tablas:', error);
            res.status(500).send('Error al obtener los nombres de las tablas');
            return;
        }
        res.render('../Frontend/views/pages/tablas-admin/usuariosAdmin', { usuariosAdmin: results }); // Renderiza la vista EJS con los nombres de las tablas
    });
});

export default router;