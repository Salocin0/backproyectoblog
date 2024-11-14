import express from "express";
import { getProductController, getProductsController, updateProductController, createProductController, deleteProductController, deleteDefinitiveProductController } from "../controller/controllerProducto.js";
import { isAdmin, isLogged } from "../middleware/authmiddleware.js";
const routerProducto = express.Router();


routerProducto.get("/", getProductsController) // 
routerProducto.get("/:id",isLogged, getProductController) // 
routerProducto.post("/",isLogged,isAdmin, createProductController) // 
routerProducto.put("/:id",isLogged,isAdmin, updateProductController) // 
routerProducto.delete("/:id",isLogged,isAdmin, deleteProductController) //
routerProducto.delete("/definitivo/:id",isLogged,isAdmin, deleteDefinitiveProductController) // 

export default routerProducto;