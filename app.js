import express from 'express';
import cors from 'cors';

import UsuariosRoutes from './Backend/Routes/usuarios.js';
import viewsRoutes from './Frontend/views';


const app = express();

app.set('view engine', 'ejs');
app.set('port' , 3000);

//Para que funcione la carpeta de uploads (evita que la url sea la ubicacion de la carpeta sea una ruta express)
app.use('/uploads', express.static('uploads'));

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.get('/' , (req, res) =>
{
    res.send("ANDA!!!");
})

app.use(UsuariosRoutes);
app.use(viewsRoutes);

export default app;