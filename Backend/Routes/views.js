import { Router } from 'express';
import {viewUsuariosEspecialistas, UsuarioLogeado, getUsuario, viewsTodosLosUsuarios} from '../Controllers/usuarios.js'
import { viewEspecializacionUsuario, viewEspecializaciones, getEspecializacionPerfil } from '../Controllers/especializaciones.js';

const router = Router();

router.get('/', function (req, res) {

    var idUsuario = (req.session.idUsuario || 0);
    var tokenUsuario = (req.session.token || 0);

    console.log(req.session);
    console.log("CARGADO:");
    console.log(idUsuario);
    console.log(tokenUsuario);

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

router.get('/oficios/pagina::pag', function (req, res) {

    var pagina = req.params.pag;
    var idUsuario = (req.session.idUsuario || 0);
    var tokenUsuario = (req.session.token || 0);
    console.log(req.session);
    console.log("CARGADO:");
    console.log(idUsuario);
    console.log(tokenUsuario);

    //var usuariosEspecialistas = viewUsuariosEspecialistas(pagina);
    var usuariosEspecialistas = viewsTodosLosUsuarios(pagina);

    var especializaciones = viewEspecializaciones();
    usuariosEspecialistas.then(function(usuarios)
    {
        console.log(usuarios);
        especializaciones.then(function(especializacion)
        {
            res.render("../Frontend/views/pages/oficios", {
                "usuariosEsp" : usuarios,
                "especializacion" : especializacion,
            });
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

    console.log(req.session);
    console.log("CARGADO:");
    console.log(idUsuario);
    console.log(tokenUsuario);

    var usuarioLogeado = UsuarioLogeado(idUsuario , tokenUsuario);

    var idPerfil = req.params.id;
    var idUsuario = (req.session.idUsuario || 0);
    var usuarioPerfil = getUsuario(idPerfil);
    var especializacionPerfil = getEspecializacionPerfil(idPerfil);
    usuarioPerfil.then(function(usuario)
    {
        especializacionPerfil.then(function(especializaciones)
        {
            usuarioLogeado.then(function(logeado)
            {
                res.render('../Frontend/views/pages/perfil', {
                    "user": usuario,
                    "id": idUsuario,
                    "especializaciones": especializaciones,
                    "usuarioLogeado": logeado,
                });
            })      
        })
  
    })   
});

router.get('/admin', function (req, res) {
    res.render('../Frontend/views/pages/admin')
});


export default router;