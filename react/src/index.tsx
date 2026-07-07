import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./stores";
import socketIo from "./sockets/socketIo";
//import ws from "./sockets/webSockets";
import cache from "./api/createApiCache";
import Routes from "./views/Routes";
import "./theme/index.css";

//ws.createSocket();
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
