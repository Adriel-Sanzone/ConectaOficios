import {Router} from 'express';
import {getUsuarios , UsuarioLogeandose, UsuarioValidado, RegistroUsuario, InsertoImagenPerfil, AsignoEspecializacion, InsertoImagenPortada, AgregoProyecto, CerrarSesion, EditoPerfil, EliminoEspecializacion} from '../Controllers/usuarios.js'

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
router.post('/usuario' , UsuarioLogeandose);
router.post('/usuariovalidado' , UsuarioValidado);
router.post('/registrousuario' , RegistroUsuario);
router.post('/asignoespecializacion' , AsignoEspecializacion);
router.post('/eliminoespecializacion' , EliminoEspecializacion)
router.post('/cerrarsesion', CerrarSesion);
router.post('/editoperfil', EditoPerfil);
//Subida de archivo
router.post('/insertoimagenperfil', upload.single("usuarioFoto"), InsertoImagenPerfil);
router.post('/insertoimagenportada', upload.single("usuarioFoto"), InsertoImagenPortada);
router.post('/agregoproyecto', upload.single("imagen"), AgregoProyecto);

export default router;