interface RouteClasses {
  handler(wss: WebSocket, message: unknown): void;
}

/**
 * Create roots
 *
 * @param {Object} options Should be url:"http://domain.com" and path: "/any_path"
 */
class WebSocketRouter {
  routes: Map<String, RouteClasses>;
  ws: WebSocket;

  constructor(ws: WebSocket){
    this.routes = new Map()
    this.ws = ws
  }

  public handler = (ws: WebSocket, message: any) => {
    const route = this.routes.get(message.path);

    if (!route) {
      return ws.send(JSON.stringify({
        error: "Route not found",
        path: message.path
      }));
    }

    return route.handler(ws, message);
  }

  public of = (path: string, RouteClass: new () => any) => {
    this.routes.set(path, new RouteClass());
    return this;
  }

  public getRoutes = () => {
    return this.routes;
  } 
}

export default WebSocketRouter
