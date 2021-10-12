import express from 'express';
//router permite generar rutas
const router = express.Router();
// importar el modelo nota
import Servicio from '../models/servicio';
// POST
router.post('/nuevo-servicio', async(req, res) => {
 const body = req.body;
 try {
 const servicioDB = await Servicio.create(body);
 res.status(200).json(servicioDB);
 } catch (error) {
 return res.status(500).json({
 mensaje: 'Ocurrio un error',
 error
 })
 }
});

// GET
router.get('/servicio/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const servicioDB = await Servicio.findOne({_id});
    res.json(servicioDB);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })  
}
});

//GET ALL
router.get('/servicio', async(req, res) => {
    try {
    const servicioDb = await Servicio.find();
    res.json(servicioDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });

//DELETE
router.delete('/servicio/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const servicioDb = await Servicio.findByIdAndDelete({_id});
    if(!servicioDb){
    return res.status(400).json({
    mensaje: 'No se encontró el id indicado',
    error
    })
    }
    res.json(servicioDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });

//PUT

router.put('/servicio/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
    const servicioDb = await Servicio.findByIdAndUpdate(
    _id,
    body,
    {new: true});
    res.json(servicioDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });
// Exportamos la configuración de express app
module.exports = router;