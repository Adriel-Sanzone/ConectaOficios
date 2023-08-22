import express from 'express';
import cors from 'cors';

import UsuariosRoutes from './Backend/Routes/usuarios.js';


const app = express();
app.set('port' , 3000);

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.get('/' , (req, res) =>
{
    res.send("ANDA!!!");
})

app.use(UsuariosRoutes);

export default app;