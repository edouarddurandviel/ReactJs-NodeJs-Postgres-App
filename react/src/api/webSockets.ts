import config from "../config";
let ws: WebSocket;

export default {
  createSocket: () => {
    let pingInterval: any;
    let counter = 0;

    if (!ws) ws = new WebSocket(`${config.websocket}/socket`, ["ws"]);

    ws.addEventListener("open", () => {
      console.log("CONNECTED");
      if (counter === 1) {
        pingInterval = setInterval(() => {
          console.log(`SENT: ping: ${counter}`);
          ws.send("ping");
        }, 1000);
        counter++;
      }
    });

    ws.addEventListener("close", () => {
      console.log("DISCONNECTED");
      clearInterval(pingInterval);
    });

    ws.addEventListener("message", (e) => {
      console.log(`RECEIVED: ${e.data}: ${counter}`);
      counter++;
    });

    ws.addEventListener("error", (err: any) => {
      console.error(`ERROR: ${err}`);
    });
  },
  instance: () => {
    return ws;
  },
};
