import type { Middleware } from "redux";
import type { PathParamsObject } from "../../api/interfaces";
import socketIo from "../../socketIo/createSocketIo";
import cache from "../../api/createApiCache";

type SocketAction = {
  type: string;
  payload: {
    data: object;
    params: PathParamsObject;
    query: object;
  };
  emit?: {
    message: string;
    data: unknown;
  };
  message?: string;
  socket?: boolean;
  leave?: boolean;
};

export const socketMiddleware: Middleware = (api) => (next) => async (action) => {
  const typedAction = action as SocketAction;
  const { dispatch } = api;

  if (typedAction.socket) {
    const io = socketIo.getInstance();

    if (typedAction.leave) {
      io.off(typedAction.message);
    } else {
      if (typedAction.emit) {
        io.emit(typedAction.emit.message, typedAction.emit.data);
      } else {
        io.off(typedAction.message);
        io.on(`${typedAction.message}`, (err) => {
          if (err) return;

          const cacheMap = cache.getInstance();
          if (cacheMap.hasCache("operation")) {
            cacheMap.delete("operation");
          }

          dispatch({
            type: typedAction.type,
            payload: typedAction.payload,
          });
        });
      }
    }
  } else {
    next(action);
  }
};
