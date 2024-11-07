import {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteDefinitiveProduct,
} from "../service/serviceProducto.js";
export const getProductsController = (req, res) => {
  //no tiene parametros para sacar del req  queda asi
  try {
    const products = getProducts();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "error server" });
  }
};

export const getProductController = (req, res) => {
  try {
    const id = req.params.id;
    const producto = getProduct(id);
    if (!producto) {
      return res.status(400).send("producto no encontrado");
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: "error server" });
  }
};

export const createProductController = (req, res) => {
  try {
    const { nombre, precio } = req.body;
    if (!nombre || !precio) {
      return res.status(400).send("Faltan datos");
    }
    const producto = createProduct(nombre, precio);
    return res.status(200).json(producto);
  } catch (error) {
    console.log(error);
    return res.status(500).send("error server");
  }
};

export const updateProductController = (req, res) => {
  try {
    const id = req.params.id;
    const { nombre, precio } = req.body;
    const producto = updateProduct(id, nombre, precio);
    res.status(200).json(producto);
  } catch (error) {
    return res.status(500).send("error server");
  }
};

export const deleteProductController = (req, res) => {
  try {
    const id = req.params.id;
    const producto = deleteProduct(id);
    res.status(200).json(producto);
  } catch (error) {
    return res.status(500).send("error server");
  }
};

export const deleteDefinitiveProductController = (req, res) => {
    try {
        const id = req.params.id;
        const producto = deleteDefinitiveProduct(id);
        res.status(200).json(producto);
    } catch (error) {
        return res.status(500).send("error server");
    }
};
