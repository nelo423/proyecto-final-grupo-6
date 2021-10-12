import express from 'express';
//router permite generar rutas
const router = express.Router();
// importar el modelo nota
import Usuario from '../models/usuario';
// Agregar una nota
router.post('/nuevo-usuario', async(req, res) => {
 const body = req.body;
 try {
 const usuarioDB = await Usuario.create(body);
 res.status(200).json(usuarioDB);
 } catch (error) {
 return res.status(500).json({
 mensaje: 'Ocurrio un error',
 error
 })
 }
});

// GET
router.get('/usuario/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const usuarioDB = await Usuario.findOne({_id});
    res.json(usuarioDB);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })  
}
});

//GET ALL
router.get('/usuario', async(req, res) => {
    try {
    const usuarioDb = await Usuario.find();
    res.json(usuarioDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });

//DELETE
router.delete('/usuario/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const usuarioDb = await Usuario.findByIdAndDelete({_id});
    if(!usuarioDb){
    return res.status(400).json({
    mensaje: 'No se encontró el id indicado',
    error
    })
    }
    res.json(usuarioDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });

//PUT

router.put('/usuario/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
    const usuarioDb = await Usuario.findByIdAndUpdate(
    _id,
    body,
    {new: true});
    res.json(usuarioDb);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });
// Exportamos la configuración de express app
module.exports = router;
