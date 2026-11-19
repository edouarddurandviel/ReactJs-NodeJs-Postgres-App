import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { socketMiddleware } from "./socket/middleware";
import { companyMiddleware } from "./company/middleware";
import { userMiddleware } from "./user/middleware";
import { authMiddleware } from "./auth/middleware";

const groupedMiddlewares = [companyMiddleware, userMiddleware, authMiddleware, socketMiddleware];

export const rootMiddleware = applyMiddleware(thunk, ...groupedMiddlewares);
