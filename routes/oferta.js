import express from 'express';
//router permite generar rutas
const router = express.Router();
// importar el modelo nota
import Oferta from '../models/oferta';
// Agregar una nota
router.post('/ofertante-nuevo', async(req, res) => {
 const body = req.body;
 try {
 const ofertaDB = await Oferta.create(body);
 res.status(200).json(ofertaDB);
 } catch (error) {
 return res.status(500).json({
 mensaje: 'Ocurrio un error',
 error
 })
 }
});

// GET
router.get('/ofertante/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const ofertaDB = await Oferta.findOne({_id});
    res.json(ofertaDB);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })  
}
});

//GET ALL
router.get('/ofertante', async(req, res) => {
    try {
    const ofertaDb = await Oferta.find();
    res.json(ofertaDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });

//DELETE
router.delete('/ofertante/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const ofertaDb = await Oferta.findByIdAndDelete({_id});
    if(!ofertaDb){
    return res.status(400).json({
    mensaje: 'No se encontró el id indicado',
    error
    })
    }
    res.json(ofertaDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });

//PUT

router.put('/ofertante/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
    const ofertaDb = await Oferta.findByIdAndUpdate(
    _id,
    body,
    {new: true});
    res.json(ofertaDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });
// Exportamos la configuración de express app
module.exports = router;