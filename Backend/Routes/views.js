import { Router } from 'express';
import {viewUsuariosEspecialistas} from '../Controllers/usuarios.js'
const router = Router();

router.get('/inicio', function (req, res) 
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
    var usuariosEspecialista = viewUsuariosEspecialistas()
    usuariosEspecialista.then(function(usuarios)
    {
        res.render("../Frontend/views/pages/oficios", {
            "usuariosEsp" : usuarios,
        });
    }) 
});

router.get('/registro', function (req, res) {
    res.render('../Frontend/views/pages/registro')
});

router.get('/perfil', function (req, res) {
    res.render('../Frontend/views/pages/perfil')
});

export default router;