import express from "express";
import "express-async-errors";
import { ErrorHandling } from "@src/middlewares/ErrorHandling";
import { routes } from "@src/routes";

const app = express();

app.use(express.json());

app.use(routes);

app.use(ErrorHandling);

export { app };
