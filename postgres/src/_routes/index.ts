import express from "express";
import UsersRoutes from "./user";
import CompanyRoutes from "./company";
import RemoteRoutes from "./remote";
import { Server } from "socket.io";
import { sessionToken } from "@middleware/sessionToken";

export default (io: Server) => {
  const app = express.Router({
    mergeParams: false,
    caseSensitive: true,
    strict: true
  });

  app.use("/company", sessionToken, CompanyRoutes(io));
  app.use("/user", UsersRoutes(io));
  //app.use("/remote", RemoteRoutes(io));

  return app;
};
