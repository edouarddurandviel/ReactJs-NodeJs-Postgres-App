interface RouteClasses {
  handler(wss: WebSocket, routes: Map<String, RouteClasses>): void;
}

/**
 * Create roots
 *
 * @param {Object} options Should be url:"http://domain.com" and path: "/any_path"
 * @param {WebSocket} ws Should web socket instance
 */
class WebSocketRouter {
  routes: Map<String, RouteClasses>;
  ws: WebSocket;

  constructor(ws: WebSocket) {
    this.routes = new Map();
    this.ws = ws;
  }

  /**
   * handler
   *
   * @param {WebSocket} ws Should be a web socket instance.
   * @param {any} data Should be any object containing a message path.
   */
  public handler = (ws: WebSocket, data: any) => {
    const route = this.routes.get(data);
    if (!route) {
      return ws.send(
        JSON.stringify({
          error: "Route not found",
          path: data
        })
      );
    }

    return route.handler(ws, data);
  };

  /**
   * Create new root
   *
   * @param {string} path Should be url:"http://domain.com" and path: "/any_path"
   * @param {any} RouteClass route class instance
   */
  public of = (path: string, RouteClass: new () => any) => {
    this.routes.set(path, new RouteClass());
    return this;
  };

  /**
   * get routes
   */
  public getRoutes = () => {
    return this.routes;
  };
}

export default WebSocketRouter;
