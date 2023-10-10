import express from 'express';
import session from 'express-session';
import cors from 'cors';

import UsuariosRoutes from './Backend/Routes/usuarios.js';
import viewsRoutes from './Backend/Routes/views.js';


const app = express();

app.set('view engine', 'ejs');
app.set('port' , 3000);

//Para que funcione la carpeta de uploads (evita que la url sea la ubicacion de la carpeta sea una ruta express)
app.use('/uploads', express.static('uploads'));
/*Le dice a Express que debe servir archivos estáticos desde la carpeta Frontend y configurar automáticamente el tipo MIME correctamente para los archivos CSS. */
app.use('/Frontend', express.static('Frontend')); 

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

//Configuro el session
app.use(session({
    secret: 'keyboard cat',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: true
  }));

app.use(UsuariosRoutes);
app.use(viewsRoutes);

export default app;