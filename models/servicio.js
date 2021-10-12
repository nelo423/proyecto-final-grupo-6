import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// el esquema me permite estandarizar mi documento 

//DATOS
const servicioSchema = new Schema({
    servicio: String,
    descripcion:String,
    imagen:String,
    activo: {type: Boolean, default: true}
   });

// Convertir a modelo
const Servicio = mongoose.model('Servicio', servicioSchema);
export default Servicio;