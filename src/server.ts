import cors from "cors";
import express, { json } from "express";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(json());
app.use(routes);

app.listen(3333, () => {
  console.log("Server listening on http://localhost:3333");
});
