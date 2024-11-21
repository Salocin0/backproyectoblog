import express from "express";
import { getblogscontroller,getblogcontroller,createblogcontroller,updateblogcontroller,getblogPopuladocontroller,deleteblogcontroller } from "../controller/controllerBlog.js";

const routerBlog = express.Router();

routerBlog.get("/",getblogscontroller)
routerBlog.get("/:id",getblogcontroller)
routerBlog.get("/populado/:id",getblogPopuladocontroller) 
routerBlog.post("/",createblogcontroller) 
routerBlog.put("/:id",updateblogcontroller)
routerBlog.delete("/:id",deleteblogcontroller)

export default routerBlog;