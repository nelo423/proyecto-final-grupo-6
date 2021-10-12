import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// el esquema me permite estandarizar mi documento 

//DATOS
const contactoSchema = new Schema({
    nombre: String,
    email:String,
    item: String,
    elMensaje: String,
    t_datos: {type: Boolean, default: true}
   });

// Convertir a modelo
const Contacto = mongoose.model('Contacto', contactoSchema);
export default Contacto;