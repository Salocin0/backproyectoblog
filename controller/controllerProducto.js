import {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteDefinitiveProduct,
} from "../service/serviceProducto.js";
export const getProductsController = async (req, res) => {
  try {
    const products = await getProducts();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "error server" });
  }
};

export const getProductController = async (req, res) => {
  try {
    const id = req.params.id;
    const producto = await getProduct(id);
    if (!producto) {
      return res.status(400).send("producto no encontrado");
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: "error server" });
  }
};

export const createProductController = async (req, res) => {
  try {
    const { nombre, precio } = req.body;
    if (!nombre || !precio) {
      return res.status(400).send("Faltan datos");
    }
    const producto = await createProduct(nombre, precio);
    return res.status(200).json(producto);
  } catch (error) {
    console.log(error);
    return res.status(500).send("error server");
  }
};

export const updateProductController = async (req, res) => {
  try {
    const id = req.params.id;
    const { nombre, precio } = req.body;
    const producto = await updateProduct(id, nombre, precio);
    res.status(200).json(producto);
  } catch (error) {
    return res.status(500).send("error server");
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const id = req.params.id;
    const producto = await deleteProduct(id);
    res.status(200).json(producto);
  } catch (error) {
    return res.status(500).send("error server");
  }
};

export const deleteDefinitiveProductController = async (req, res) => {
    try {
        const id = req.params.id;
        const producto = await deleteDefinitiveProduct(id);
        res.status(200).json(producto);
    } catch (error) {
        return res.status(500).send("error server");
    }
};
