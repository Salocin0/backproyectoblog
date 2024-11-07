import express from "express";
import { getProductController, getProductsController, updateProductController, createProductController, deleteProductController, deleteDefinitiveProductController } from "../controller/controllerProducto.js";
import { isAdmin, isLogged } from "../middleware/authmiddleware.js";
const routerProducto = express.Router();


routerProducto.get("/", getProductsController) // productos/
routerProducto.get("/:id",isLogged, getProductController) // productos/:id
routerProducto.post("/",isLogged,isAdmin, createProductController) // productos/
routerProducto.put("/:id",isLogged,isAdmin, updateProductController) // productos/:id
routerProducto.delete("/:id",isLogged,isAdmin, deleteProductController) // productos/:id
routerProducto.delete("/definitivo/:id",isLogged,isAdmin, deleteDefinitiveProductController) // productos/definitivo/:id

export default routerProducto;