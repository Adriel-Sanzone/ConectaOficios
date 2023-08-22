import {Router} from 'express';
import {getUsuarios , getUsuario, UsuarioValidado, RegistroUsuario} from '../Controllers/usuarios.js'

const router = Router();

router.get('/usuarios' , getUsuarios);
router.post('/usuario' , getUsuario);
router.post('/usuariovalidado' , UsuarioValidado);
router.post('/registrousuario' , RegistroUsuario);

export default router;