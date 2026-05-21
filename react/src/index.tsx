import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./stores";
import socketIo from "./socketIo/createSocketIo";
import cache from "./api/createApiCache";
import Routes from "./views/Routes";
import "./theme/index.css";
import { PersistGate } from "redux-persist/integration/react";

socketIo.createSocketIo();
cache.createApiCache();

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);
