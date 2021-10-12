import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

//conexion a base de datos
const mongoose = require('mongoose');
const uri = "mongodb+srv://equipo6_62:2021equipo6@cluster0.e8c70.mongodb.net/servihogar?retryWrites=true&w=majority";
const options = { useNewUrlParser: true, useUnifiedTopology: true };
    //usando promesas
mongoose.connect(uri,options).then(
    () => {
        console.log('Conectado a DB')
    },
    err => {err}
);

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
// Rutas
// app.get('/', (req, res) => {
//  res.send('Hello World!');
// });

//ruta

app.use('/api', require('./routes/nota'));
app.use('/api', require('./routes/contacto'));
app.use('/api', require('./routes/oferta'));
app.use('/api', require('./routes/servicio'));
app.use('/api', require('./routes/usuario'));
app.use('/api', require('./routes/carrito'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
 console.log('Example app listening on port'+ app.get('puerto'));
});
