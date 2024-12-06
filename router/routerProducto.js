import express from "express";
import {
  getProductController,
  getProductsController,
  getProductsFiltradosController,
  updateProductController,
  getProductsPaginadoController,
  createProductController,
  deleteProductController,
  deleteDefinitiveProductController,
} from "../controller/controllerProducto.js";
import { brotliMiddleware } from "../middleware/brotlimiddleware.js";
import {
  validationPostProducto,
  validationPutProducto,
  validationIdProducto,
  validationgetProductoPaginado,
  validationgetProductoFiltrado,
} from "../validations/validationProducto.js";
import { validationMiddleware } from "../middleware/validationmiddleware.js";
import { authMiddleware } from "../middleware/authmiddleware.js";
const routerProducto = express.Router();

////////////////////////Router de producto////////////////////////
//                                                              //
//este componente se encarga de manejar las rutas y middlewares //
//                                                              //
//////////////////////////////////////////////////////////////////

//ruta get de todos los productos, aplica compresion
routerProducto.get("/", brotliMiddleware, getProductsController); //

//ruta para obtener productos paginados aplica compresion y validaciones
routerProducto.get(
  "/paginado",
  brotliMiddleware,
  validationgetProductoPaginado,
  validationMiddleware,
  getProductsPaginadoController
); 
//ruta para obtener productos filtrados aplica compresion y validaciones
routerProducto.get(
  "/filtrado",
  brotliMiddleware,
  validationgetProductoFiltrado,
  validationMiddleware,
  getProductsFiltradosController
); 
//ruta para obtener un producto aplica validaciones
routerProducto.get(
  "/:id",
  validationIdProducto,
  validationMiddleware,
  getProductController
);
//ruta para crear un producto necesitamos autenticacion y aplica validaciones
routerProducto.post(
  "/",
  authMiddleware, //autenticacion
  validationPostProducto,
  validationMiddleware,
  createProductController
);
//ruta para actualizar un producto necesitamos autenticacion, aplica compresion y aplica validaciones
routerProducto.put(
  "/:id",
  authMiddleware,
  brotliMiddleware,
  validationPutProducto,
  validationMiddleware,
  updateProductController
);
//ruta para eliminar un producto (cambia el estado) necesitamos autenticacion aplica validaciones
routerProducto.delete(
  "/:id",
  authMiddleware,
  validationIdProducto,
  validationMiddleware,
  deleteProductController
);
//ruta para eliminar un producto definitivamente necesitamos autenticacion aplica validaciones
routerProducto.delete(
  "/definitivo/:id",
  authMiddleware,
  validationIdProducto,
  validationMiddleware,
  deleteDefinitiveProductController
);

export default routerProducto;
