import { IncomingMessage } from "node:http";
import { WebSocketServer } from "ws";
import { checkConnections, wsRouter } from "./heartbeat";
import WebSocketRouter from "./wsRouter";

let wss: WebSocketServer | undefined;
let connectedIps = new Map();

export default {
  createSocketServer: async () => {


    if (!wss) {
      wss = new WebSocketServer({
        port: 8080,
        perMessageDeflate: {
          zlibDeflateOptions: {
            // See zlib defaults.
            chunkSize: 1024,
            memLevel: 7,
            level: 3
          },
          zlibInflateOptions: {
            chunkSize: 10 * 1024
          },
          // Other options settable:
          clientNoContextTakeover: true, // Defaults to negotiated value.
          serverNoContextTakeover: true, // Defaults to negotiated value.
          serverMaxWindowBits: 10, // Defaults to negotiated value.
          // Below options specified as default values.
          concurrencyLimit: 10, // Limits zlib concurrency for perf.
          threshold: 1024 // Size (in bytes) below which messages
          // should not be compressed if context takeover is disabled.
        }
      });
    }


    const _heartBeat = await checkConnections(wss);

    wss.on("connection", (ws, req) => {
      console.info("[WebSocketServer]: connected");

      // Collect all client ip addresses
      if (req.socket.remoteAddress) {
        connectedIps.set(req.socket.remoteAddress, "edouard");
      }

      // Initialise router
      const router = new WebSocketRouter(ws as unknown as WebSocket);

      // Routes and associated controllers - Request
      // router.of("/users", WS_UsersController(req));
      // router.of("/companies", WS_CompaniesController(req));
      // router.of("/profiles", WS_ProfilesController(req));


      const routes = router.getRoutes()
      console.log(routes)

      // all is ok - isAlive
      _heartBeat.isAlive = true;

      ws.on("error", console.error);

      ws.on("pong", () => {
        _heartBeat.isAlive = true;
      });

      // Standard message endpoint
      ws.on("message", async (data) => {
        console.info("[WebSocketServer]: received: %s", data);
        await router.handler(ws as unknown as WebSocket, data);
      });

      // Standard message sender enpoint
      ws.send("[WebSocketServer]: was sent from WebSocket server");
    });


    wss.on("close", (req: IncomingMessage) => {
      clearInterval(_heartBeat.interval);

      if (req.socket.remoteAddress) {
        connectedIps.delete(req.socket.remoteAddress);
      }
    });
  },
  instance: () => {
    return wss;
  }
};
