import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import { productRouter } from "./router";

const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use(cors());
app.use("/products", productRouter);

app.get("/", (_req, res) => {
  res.json({ ok: 1 });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
