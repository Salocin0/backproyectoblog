import Producto from "../model/modelProducto.js";
import crypto from "crypto";

////////////////////////service de producto////////////////////////
//                                                               //
// este componente recibe los componentes y resuelve la logica.  //
// si necesita acceder a la base de datos, llama al model.       //
//                                                               //
///////////////////////////////////////////////////////////////////

//obtiene todos los productos de la base de datos que tiene el estado en true
export const getProducts = async () => {
    const productos = await Producto.find({estado:true})
    return productos;
};
//obtiene todos los productos que cumplan con los filtros de la base de datos
export const getProductsFiltrados = async (nombre,precioMin,precioMax,orderby,order) => {
    //estado en true
    const filtros = {estado:true};
    //nombre del producto igual a la variable nombre, no le importa las mayusculas 
    if (nombre) {
        filtros.nombre = {$regex: nombre, $options: "i"}
    }
    //el precio tiene que estar entre precioMin y precioMax
    if(precioMin || precioMax){
        filtros.precio = {};
        if(precioMin){
            filtros.precio.$gte = precioMin;
        }
        if(precioMax){
            filtros.precio.$lte = precioMax;
        }
    }
    //debe estar ordenado segun la variable orderby y ascendente o descendente segun order
    const sortOptions = {}
    if(orderby){
        sortOptions[orderby]= order === 'desc'?-1:1;
    }

    console.log(filtros);
    const productos = await Producto.find(filtros).sort(sortOptions)
    return productos;
};
//devuelve la pagina de productos solicitada con la cantidad de productos solicitada
export const getProductsPaginado = async (page, limit) => {
    const skip = (page - 1) * limit;
    const productos = await Producto.find({estado:true}).skip(skip).limit(limit) // 3 productos que estado = true y tenemos 2 que el estado = false
    const cantidadItems = await Producto.find({estado:true}).countDocuments(); // 3 != 5
    const respuesta = {
        productos: productos,
        cantidadItems: cantidadItems,
        cantidadPaginas: Math.ceil(cantidadItems / limit),
        paginaActual: page
    }
    return respuesta;
};
//obtiene un producto de la base de datos que tenga el id solicitado
export const getProduct = async (id) => {
    const producto = await Producto.findOne({id:id}) // no usamos el findById porque machea con el _id
    return producto;
};
//crea un producto en la base de datos con los datos
export const createProduct = async (nombre,precio) => {
    const producto = {
        id: crypto.randomUUID(),
        nombre: nombre,
        precio: precio
    };
    const nuevoProducto = await Producto.create(producto);
    return nuevoProducto;
};
//actualiza un producto en la base de datos que tenga el id solicitado con los datos nuevos
export const updateProduct = async(id, nombre,precio) => {
    const producto = await Producto.findOneAndUpdate({id:id}, {nombre:nombre,precio:precio})
    return producto;
};
//cambia el estado de un producto en la base de datos que tenga el id solicitado
export const deleteProduct = async (id) => {//actualizar
    const producto = await Producto.findOneAndUpdate({id:id}, {estado:false})
    return producto;
};
//borra un producto de la base de datos que tenga el id solicitado
export const deleteDefinitiveProduct = async (id) => {//borrar
    const producto = await Producto.findOneAndDelete({id:id})
    return producto;
};
