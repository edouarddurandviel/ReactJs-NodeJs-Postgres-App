import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import companyReducers from "./company/reducers";
import userReducers from "./user/reducers";
import authReducers from "./auth/reducers";

const rootReducer = combineReducers({
  company: companyReducers,
  user: userReducers,
  auth: authReducers,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
