import {Router} from 'express';
import {getUsuarios} from '../Controllers/usuarios.js'

const router = Router();

router.get('/usuarios' , getUsuarios);

export default router;