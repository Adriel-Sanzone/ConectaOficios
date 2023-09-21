import {Router} from 'express';
import {getUsuarios , getUsuario, UsuarioValidado, RegistroUsuario, InsertoImagenPerfil, AsignoEspecializacion, InsertoImagenPortada} from '../Controllers/usuarios.js'

import multer from 'multer';

/*multerStorage es donde se van a almacenar los archivos y tiene varios parametros:
-destination es la carpeta en la que vamos a guardar (uploads en este caso)
-filename es el nombre del archivo que guardamos*/
const multerStorage = multer.diskStorage(
{
    destination: (req, file, cb) =>
    {
        cb(null, "Frontend/uploads");
    },
    filename: (req, file, cb) =>
    {
        cb(null, `${Date.now()}.${file.originalname}`);
    },
});

//variable que encapsula el modulo multer
const upload = multer({ storage: multerStorage });

const router = Router();

router.get('/usuarios' , getUsuarios);
router.post('/usuario' , getUsuario);
router.post('/usuariovalidado' , UsuarioValidado);
router.post('/registrousuario' , RegistroUsuario);
router.post('/asignoespecializacion' , AsignoEspecializacion);
//Subida de archivo
router.post('/insertoimagenperfil', upload.single("usuarioFoto"), InsertoImagenPerfil);
router.post('/insertoimagenportada', upload.single("usuarioFoto"), InsertoImagenPortada);

export default router; 