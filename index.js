import express from "express";
import routerProducto from "./router/routerProducto.js";
import cors from "cors";
import env from "dotenv";
import mongoose from "mongoose";
import routerBlog from "./router/routerBlog.js";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert { type: "json" };
import routerAutor from "./router/routerAutor.js";
import { brotliMiddleware } from "./middleware/brotlimiddleware.js";
import routerUsuario from "./router/routerUsuario.js";
import { authMiddleware } from "./middleware/authmiddleware.js";
import { logger } from "./config/Winston.js";
import Movies from "./model/modelPelicula.js";
env.config();
const PORT = process.env.PORT || 3000;
const app = express();
//midleware de json
app.use(express.json());
//middleware de cors
app.use(cors(
  {
    origin: "*",
    allowedHeaders: ["Content-Type", "Authorization","x-refresh-token"],
  }
));
//middleware de log
app.use((req, res, next) => {
  logger.error(`${req.method} ${req.url}`);
  next();
});
//rutas
app.use("/productos", routerProducto);
app.use("/blogs", routerBlog);
app.use("/autores", routerAutor);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use("/auth", routerUsuario)
//rutas de pueba
app.get("/protected",authMiddleware, (req, res) => {
  res.json({ message: "Acceso permitido", user: req.user });
});

app.post("/movies", async (req, res) => {
  const movie = {
    plot: "plot",
    runtime: 0,
    poster: "poster",
    title:"title",
    fullplot: "fullplot",
    rated: "rated",
    year : 2024,
    released: "released",
    director: "director",
    type:"type",
  }
  const movies = await Movies.create(movie)
  res.status(200).send(movies)
});

app.get("/movies",brotliMiddleware, async (req, res) => {

  const movies = await Movies.find({})
  res.status(200).send(movies)
});
app.get("/pruebacompresion",brotliMiddleware, (req, res) => {
  const productos = Array.from({ length: 10000 }, (_, i) => ({
    id: i + 1,
    nombre: `Producto ${i + 1}`,
    descripcion: `Descripción del producto ${i + 1}`,
    precio: (Math.random() * 100).toFixed(2),
    disponible: i % 2 === 0,
  }));
  res.json(productos);
})
//middleware de error 404
app.use((req, res) => {
  res.status(404).send("<h1>404<h1>");
});
//conexion a la base de datos
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
