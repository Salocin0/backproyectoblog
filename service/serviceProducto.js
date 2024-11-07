let productos = [
    { id: 1, nombre: "Producto 1", precio: 100, estado: true },
    { id: 2, nombre: "Producto 2", precio: 200, estado: true },
    { id: 3, nombre: "Producto 3", precio: 300, estado: true },
  ];

export const getProducts = () => {
    console.log("get productos service");
    return productos;
};

export const getProduct = (id) => {
    const producto = productos.find((producto) => producto.id == id);
    return producto;
};

export const createProduct = (nombre,precio) => {
    console.log(nombre,precio)
    const producto = {
        id: productos.length + 1,
        nombre: nombre,
        precio: precio,
        estado: true,
      };
      productos.push(producto);
      return producto;
};

export const updateProduct = (id, nombre,precio) => {
    const producto = productos.find((producto) => producto.id == id);
    producto.nombre = nombre;
    producto.precio = precio;
    return producto;
};

export const deleteProduct = (id) => {
    const producto = productos.find((producto) => producto.id == id);
    producto.estado = false;
    return producto;
};

export const deleteDefinitiveProduct = (id) => {
    const producto = productos.find((producto) => producto.id == id);
    productos = productos.filter((producto) => producto.id != id);
    return producto;
};
