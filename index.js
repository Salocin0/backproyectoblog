import express from "express";
import routerProducto from "./router/routerProducto.js";
import cors from "cors";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors())


app.use("/productos", routerProducto);


app.use((req, res) => {
  res.status(404).send("<h1>404<h1>");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
