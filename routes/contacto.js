import express from 'express';
//router permite generar rutas
const router = express.Router();
// importar el modelo nota
import Contacto from '../models/contacto';
// Agregar una nota
router.post('/nuevo-contacto', async(req, res) => {
 const body = req.body;
 try {
 const contactoDB = await Contacto.create(body);
 res.status(200).json(contactoDB);
 } catch (error) {
 return res.status(500).json({
 mensaje: 'Ocurrio un error',
 error
 })
 }
});

//GET ALL
router.get('/contacto', async(req, res) => {
    try {
    const contactoDb = await Contacto.find();
    res.json(contactoDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });

// Exportamos la configuración de express app
module.exports = router;