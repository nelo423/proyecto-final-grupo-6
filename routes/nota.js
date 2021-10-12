import express from 'express';
//router permite generar rutas
const router = express.Router();
// importar el modelo nota
import Nota from '../models/nota';
// Agregar una nota
router.post('/nueva-nota', async(req, res) => {
 const body = req.body;
 try {
 const notaDB = await Nota.create(body);
 res.status(200).json(notaDB);
 } catch (error) {
 return res.status(500).json({
 mensaje: 'Ocurrio un error',
 error
 })
 }
});

// GET
router.get('/nota/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const notaDB = await Nota.findOne({_id});
    res.json(notaDB);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })  
}
});

//GET ALL
router.get('/nota', async(req, res) => {
    try {
    const notaDb = await Nota.find();
    res.json(notaDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });

//DELETE
router.delete('/nota/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const notaDb = await Nota.findByIdAndDelete({_id});
    if(!notaDb){
    return res.status(400).json({
    mensaje: 'No se encontró el id indicado',
    error
    })
    }
    res.json(notaDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });

//PUT

router.put('/nota/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
    const notaDb = await Nota.findByIdAndUpdate(
    _id,
    body,
    {new: true});
    res.json(notaDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });
// Exportamos la configuración de express app
module.exports = router;