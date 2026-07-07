import { WebSocketServer } from "ws";

// Web Socket default api
let wss: WebSocketServer;
let connectedIps: string[] = [];

export default {
  createSocketServer: () => {
    if (!wss) wss = new WebSocketServer({ port: 8080 });

    wss.on("connection", ws => {
      ws.on("error", console.error);

      ws.on("message", function message(data) {
        console.log("received: %s", data);
      });

      ws.send("something");
    });
  },
  instance: () => {
    return wss;
  }
};
