import { WebSocketServer } from "ws";

const checkConnections = async (
  wss: WebSocketServer,
  isAlive: boolean = true
): Promise<{
  interval: NodeJS.Timeout;
  isAlive: boolean;
}> => {
  const int = setInterval(() => {
    wss.clients.forEach(ws => {
      if (!isAlive) {
        return ws.terminate();
      }

      isAlive = false;
      // Ping the client
      ws.ping();
    });
  }, 3000);

  return {
    interval: int,
    isAlive: isAlive
  };
};

const wsRouter = async (path: string) => {
  let clientUrl = "http://localhost:5733";
  return clientUrl.concat(path);
};

export { checkConnections, wsRouter };
