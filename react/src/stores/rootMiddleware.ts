import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { socketMiddleware } from "./socket/routes";
import { companyMiddleware } from "./company/routes";
import { userMiddleware } from "./user/routes";
import { authMiddleware } from "./auth/routes";

const groupedMiddlewares = [companyMiddleware, userMiddleware, authMiddleware, socketMiddleware];

export const rootMiddleware = applyMiddleware(thunk, ...groupedMiddlewares);
