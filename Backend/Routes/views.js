import { Router } from 'express';
import {viewUsuariosEspecialistas} from '../Controllers/usuarios.js'
import { viewEspecializacionUsuario, viewEspecializaciones } from '../Controllers/especializaciones.js';

const router = Router();

router.get('/', function (req, res) 
{
    var usuariosEspecialista = viewUsuariosEspecialistas()
    usuariosEspecialista.then(function(usuarios)
    {
        res.render("../Frontend/views/pages/index", {
            "usuariosEsp" : usuarios,
        });
    })

});

router.get('/iniciarSesion', function (req, res) {
    res.render('../Frontend/views/pages/iniciarSesion')
});

router.get('/oficios', function (req, res) {
    var usuariosEspecialistas = viewUsuariosEspecialistas();
    var especializaciones = viewEspecializaciones();
    var especializacionUsuario = viewEspecializacionUsuario();
    usuariosEspecialistas.then(function(usuarios)
    {
        especializaciones.then(function(especializacion)
        {
            especializacionUsuario.then(function(userEspecializacion)
            {
                res.render("../Frontend/views/pages/oficios", {
                    "usuariosEsp" : usuarios,
                    "especializacion" : especializacion,
                    "especializacionUsuario" : userEspecializacion,
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

router.get('/perfil', function (req, res) {
    res.render('../Frontend/views/pages/perfil')
});

router.get('/acercaDe', function (req, res) {
    res.render('../Frontend/views/pages/acercaDe')
});

export default router;