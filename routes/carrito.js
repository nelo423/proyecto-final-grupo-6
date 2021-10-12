import express from 'express';
//router permite generar rutas
const router = express.Router();
// importar el modelo nota
import Carrito from '../models/carrito';

// Agregar una nota
router.post('/nuevo-carrito', async(req, res) => {
 const body = req.body;
 try {
 const carritoDB = await Carrito.create(body);
 res.status(200).json(carritoDB);
 } catch (error) {
 return res.status(500).json({
 mensaje: 'Ocurrio un error',
 error
 })
 }
});

// GET
router.get('/carrito/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const carritoDB = await Carrito.findOne({_id});
    res.json(carritoDB);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })  
}
});

//GET ALL
router.get('/carrito', async(req, res) => {
    try {
    const carritoDb = await Carrito.find();
    res.json(carritoDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });

//DELETE
router.delete('/carrito/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const carritoDb = await Carrito.findByIdAndDelete({_id});
    if(!carritoDb){
    return res.status(400).json({
    mensaje: 'No se encontró el id indicado',
    error
    })
    }
    res.json(carritoDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });

//PUT

router.put('/carrito/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
    const carritoDb = await Carrito.findByIdAndUpdate(
    _id,
    body,
    {new: true});
    res.json(carritoDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });
// Exportamos la configuración de express app
module.exports = router;