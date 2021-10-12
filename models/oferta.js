import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// el esquema me permite estandarizar mi documento 

//DATOS
const ofertaSchema = new Schema({
    nombre: {type: String, required: [true, 'Nombre obligatorio']},
    clave:String,
    edad: Number,
    direccion: String,
    email: String,
    telefono:Number,
    horasContacto: String,
    calificacion: {type:Number,max:5},
    reviews:Number,
    ofertaServicio:String,
    descripcion: String,
    precio: {type: Number, min:1000},
    imagen:String,
    activo: {type: Boolean, default: true}
   });

// Convertir a modelo
const Oferta = mongoose.model('Oferta', ofertaSchema);
export default Oferta;