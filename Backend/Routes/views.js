import { Router } from 'express';
import {viewUsuariosEspecialistas, UsuarioLogeado, getUsuario, viewsTodosLosUsuarios, viewProyectos} from '../Controllers/usuarios.js'
import { viewEspecializacionUsuario, viewEspecializaciones, getEspecializacionPerfil, viewEspecializacionesNueva } from '../Controllers/especializaciones.js';

const router = Router();

router.get('/', function (req, res) {

    var idUsuario = (req.session.idUsuario || 0);
    var tokenUsuario = (req.session.token || 0);

    var usuarioLogeado = UsuarioLogeado(idUsuario , tokenUsuario);

    var usuariosEspecialistas = viewUsuariosEspecialistas(0);
    var especializaciones = viewEspecializaciones();
    var especializacionUsuario = viewEspecializacionUsuario();
    usuariosEspecialistas.then(function(usuarios)
    {
        especializaciones.then(function(especializacion)
        {
            especializacionUsuario.then(function(userEspecializacion)
            {
                usuarioLogeado.then(function(userLogeado)
                {
                    res.render("../Frontend/views/pages/index", {
                        "usuariosEsp" : usuarios,
                        "especializacion" : especializacion,
                        "especializacionUsuario" : userEspecializacion,
                        "usuarioLogeado": userLogeado,
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

    var usuarioLogeado = UsuarioLogeado(idUsuario , tokenUsuario);

    //var usuariosEspecialistas = viewUsuariosEspecialistas(pagina);
    var usuariosEspecialistas = viewsTodosLosUsuarios(pagina, categoria);

    //var especializaciones = viewEspecializaciones();
    var especializaciones = viewEspecializacionesNueva();
    usuariosEspecialistas.then(function(usuarios)
    {
        especializaciones.then(function(especializacion)
        {
            console.log(especializacion);
            usuarioLogeado.then(function(logeado)
            {
                res.render("../Frontend/views/pages/oficios", {
                    "usuariosEsp" : usuarios,
                    "especializacion" : especializacion,
                    "usuarioLogeado": logeado,
                });
            })
        })
    }) 
});

router.get('/registro', function (req, res) {
    var especializaciones = viewEspecializaciones()
    especializaciones.then(function(especializacion)
    {
        res.render("../Frontend/views/pages/registro", {
            "especializacion" : especializacion,
        });
    }) 
});

router.get('/registro2', function (req, res) {
    res.render('../Frontend/views/pages/registro2')
});

router.get('/perfil/:id', function (req, res) {

    var idUsuario = (req.session.idUsuario || 0);
    var tokenUsuario = (req.session.token || 0);

    var usuarioLogeado = UsuarioLogeado(idUsuario , tokenUsuario);

    var idPerfil = req.params.id;
    var idUsuario = (req.session.idUsuario || 0);
    var usuarioPerfil = getUsuario(idPerfil);
    var especializacionPerfil = getEspecializacionPerfil(idPerfil);
    var proyectosPerfil = viewProyectos(idPerfil);

    usuarioPerfil.then(function(usuario)
    {
        especializacionPerfil.then(function(especializaciones)
        {
            usuarioLogeado.then(function(logeado)
            {
                proyectosPerfil.then(function(proyectos)
                {
                    res.render('../Frontend/views/pages/perfil', {
                        "user": usuario,
                        "id": idUsuario,
                        "especializaciones": especializaciones,
                        "usuarioLogeado": logeado,
                        "proyectos": proyectos,
                    });
                })
            })      
        })
  
    })   
});

router.get('/admin', function (req, res) {
    res.render('../Frontend/views/pages/admin')
});

router.get('/destacar', function (req, res) {
    res.render('../Frontend/views/pages/destacar')
});

//tablas del admin

router.get('/categorias', function (req, res) {
    res.render('../Frontend/views/pages/tablas-admin/categorias')
});

router.get('/especializaciones', function (req, res) {
    res.render('../Frontend/views/pages/tablas-admin/especializaciones')
});

router.get('/especializacionDeUsuario', function (req, res) {
    res.render('../Frontend/views/pages/tablas-admin/especializacionDeUsuario')
});

router.get('/proyectos', function (req, res) {
    res.render('../Frontend/views/pages/tablas-admin/proyectos')
});

router.get('/resenias', function (req, res) {
    res.render('../Frontend/views/pages/tablas-admin/resenias')
});

router.get('/usuariosAdmin', function (req, res) {
    res.render('../Frontend/views/pages/tablas-admin/usuariosAdmin')
});






export default router;