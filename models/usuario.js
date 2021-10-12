import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// el esquema me permite estandarizar mi documento 

//DATOS
const usuarioSchema = new Schema({
    nombre: {type: String, required: [true, 'Nombre obligatorio']},
    clave: String,
    edad: Number,
    direccion: String,
    email: String,
    telefono:Number,
    horasContacto: String,
    calificacion: {type:Number,max:5},
    reviews:Number,
    imagen:String,
    activo: {type: Boolean, default: true}
   });

// Convertir a modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);
export default usuarioSchema;
