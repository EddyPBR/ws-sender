import express from "express";
import http from "http";
import { Server } from "socket.io";
import "express-async-errors";
import cookieParser from "cookie-parser";
import { ErrorHandling } from "@middlewares/ErrorHandling";
import cors from "cors";
import { routes } from "@src/routes";

const app = express();

app.use(
  cors({
    origin: process.env.WEB_CLIENT_URL,
    credentials: true,
    methods: ["GET", "POST", "DELETE"]
  })
);

app.use(express.json());

app.use(cookieParser());

app.use(routes);

app.use(ErrorHandling);

const serverHttp = http.createServer(app);

const io = new Server(serverHttp);

io.on("connection", socket => {
  console.log(`User connected on socket ${socket.id}`);
});

export { serverHttp, io };
