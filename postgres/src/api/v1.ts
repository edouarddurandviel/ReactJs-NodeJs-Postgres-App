import express from "express";
import appRoutes from "../controllers";
import { Server } from "socket.io";

export default (io: Server) => {
  const app = express.Router({
    mergeParams: false,
    caseSensitive: true,
    strict: true
  });

  app.use("/api/v1", appRoutes());

  return app;
};
