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
import { isAdmin, isLogged } from "../middleware/authmiddleware.js";
import { brotliMiddleware } from "../middleware/brotlimiddleware.js";
import {
  validationPostProducto,
  validationPutProducto,
  validationIdProducto,
  validationgetProductoPaginado,
  validationgetProductoFiltrado,
} from "../validations/validationProducto.js";
import { validationMiddleware } from "../middleware/validationmiddleware.js";
const routerProducto = express.Router();

routerProducto.get("/", brotliMiddleware, getProductsController); //
routerProducto.get(
  "/paginado",
  brotliMiddleware,
  validationgetProductoPaginado,
  validationMiddleware,
  getProductsPaginadoController
); //
routerProducto.get(
  "/filtrado",
  brotliMiddleware,
  validationgetProductoFiltrado,
  validationMiddleware,
  getProductsFiltradosController
); //
routerProducto.get(
  "/:id",
  validationIdProducto,
  validationMiddleware,
  getProductController
); //

routerProducto.post(
  "/",
  validationPostProducto,
  validationMiddleware,
  createProductController
); //

routerProducto.put(
  "/:id",
  validationPutProducto,
  validationMiddleware,
  updateProductController
); //
routerProducto.delete(
  "/:id",
  validationIdProducto,
  validationMiddleware,
  deleteProductController
); //
routerProducto.delete(
  "/definitivo/:id",
  validationIdProducto,
  validationMiddleware,
  deleteDefinitiveProductController
); //

export default routerProducto;
