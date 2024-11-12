import Producto from "../model/modelProducto.js";
import crypto from "crypto";

export const getProducts = async () => {
    const productos = await Producto.find({estado:true})
    return productos;
};

export const getProduct = async (id) => {
    const producto = await Producto.findOne({id:id}) // no usamos el findById porque machea con el _id
    return producto;
};

export const createProduct = async (nombre,precio) => {
    const producto = {
        id: crypto.randomUUID(),
        nombre: nombre,
        precio: precio
    };
    const nuevoProducto = await Producto.create(producto);
    return nuevoProducto;
};

export const updateProduct = async(id, nombre,precio) => {
    const producto = await Producto.findOneAndUpdate({id:id}, {nombre:nombre,precio:precio})
    return producto;
};

export const deleteProduct = async (id) => {//actualizar
    const producto = await Producto.findOneAndUpdate({id:id}, {estado:false})
    return producto;
};

export const deleteDefinitiveProduct = async (id) => {//borrar
    const producto = await Producto.findOneAndDelete({id:id})
    return producto;
};
