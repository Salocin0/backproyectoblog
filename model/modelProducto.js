import mongoose from "mongoose";

/////////////////////////model de producto/////////////////////////
//                                                               //
// en este componente se define un esquema y se crea un modelo.  //
// el modelo se encarga de acceder a la base de datos.           //
//                                                               //
///////////////////////////////////////////////////////////////////

const productoSchema = new mongoose.Schema({
        id: { type: String, required: true },
        nombre: { type: String, required: true },
        precio: { type: Number,default : 0 },
        estado: { type: Boolean, default: true },
    });
    
const Producto = mongoose.model("Producto", productoSchema);

export default Producto;