import express from "express";
import "express-async-errors";
import { ErrorHandling } from "@src/middlewares/ErrorHandling";
import cors from "cors";
import { routes } from "@src/routes";

const app = express();

app.use(cors({
  origin: "*",
}));

app.use(express.json());

app.use(routes);

app.use(ErrorHandling);

export { app };
