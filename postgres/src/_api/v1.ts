import express from "express";
import appRoutes from "../_routes";
import { Server } from "socket.io";

export default (io: Server) => {
  const app = express.Router({
    mergeParams: false,
    caseSensitive: true,
    strict: true
  });

  app.use("/api/v1", appRoutes(io));

  return app;
};
