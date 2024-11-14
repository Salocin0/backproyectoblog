import express from "express";
import routerProducto from "./router/routerProducto.js";
import cors from "cors";
import env from "dotenv";
import mongoose from "mongoose";
import routerBlog from "./router/routerBlog.js";

env.config()
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors())


app.use("/productos", routerProducto);
app.use("/blogs", routerBlog)


app.use((req, res) => {
  res.status(404).send("<h1>404<h1>");
});

mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
