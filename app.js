import express from 'express';
import cors from 'cors';

const app = express();
app.set('port' , 3000);

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.get('/' , (req, res) =>
{
    res.send("ANDA!!!");
})

export default app;