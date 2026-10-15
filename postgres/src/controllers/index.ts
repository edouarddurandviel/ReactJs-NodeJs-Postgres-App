import express from "express";
import UsersRoutes from "./user";
import CompanyRoutes from "./company";
// import RemoteRoutes from "./remote";
import { sessionToken } from "src/middleware/sessionToken";

export default () => {
  const app = express.Router({
    mergeParams: false,
    caseSensitive: true,
    strict: true
  });

  app.use("/company", sessionToken, CompanyRoutes());
  app.use("/user", UsersRoutes());
  //app.use("/remote", RemoteRoutes(io));

  return app;
};
