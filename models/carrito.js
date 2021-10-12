import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// el esquema me permite estandarizar mi documento 

//DATOS
const carritoSchema = new Schema({
    cliente:{type: String, required: [true, 'Nombre obligatorio']},
    clienteId:String,
    proveedor:{type: String, required: [true, 'Nombre obligatorio']},
    proveedorId:String,
    servicio: String,
    fechaSolicitud:{type: Date, default: Date.now},
    fechaServicio:String,
    observacionesC:String,
    fechaModificacion:{type: Date, default: Date.now},
    estado:String,
    observacionesP:String,
    fechaAceptacion:{type: Date, default: Date.now},
    precioPactado:{type: Number, min:1000},
    direccionServicio:String,
    calificacionC:{type:Number,max:5},
    reviewC:String,
    calificacionP:{type:Number,max:5},
    reviewP:String,
    denunciarC:{type: Boolean, default: false},
    denunciarP:{type: Boolean, default: false},
    activo: {type: Boolean, default: true}
   });

// Convertir a modelo
const Carrito = mongoose.model('Carrito', carritoSchema);
export default Carrito;