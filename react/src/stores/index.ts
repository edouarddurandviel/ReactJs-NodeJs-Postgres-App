import { legacy_createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { persistedReducer } from "./rootReducers";
import { rootMiddleware } from "./rootMiddleware";
import { persistStore } from "redux-persist";

const composedEnhancer = composeWithDevTools(rootMiddleware);

export const store = legacy_createStore(persistedReducer, undefined, composedEnhancer);
export const persistor = persistStore(store);
// Export RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
