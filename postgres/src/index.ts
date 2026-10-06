import "dotenv/config";
import http from "http";
import app from "./_config/app";
import socketIo from "@libs/socketio";
import { onErrorEvent, normalizePort } from "@libs/server";
import v1Routes from "./_api/v1";
//import eventEmitter from "@libs/eventEmitter";
//import websockets from "@libs/ws";

const origin = process.env.REACT_API_PORT;
const domain = process.env.DOMAIN_URL;
const apiPort = process.env.PORT;

// Get port from environment and store it in Express
const port = normalizePort(apiPort || "3000");
app.set("port", port);

// Create HTTP server.
const server = http.createServer(app);

// Initialize HTTP server.
const io = socketIo.init(server, {
  path: "/socket",
  cors: {
    origin: [`${domain}:${origin}`]
  }
});

//websockets.createSocketServer();
// in app.use
// const emitter = eventEmitter.createEventEmitter()
// emitter.on("notification", (data, err) => {
//   if(err){
//     console.log(err)
//   }else{
//     console.log(`Send one notification: ${data.message}`);
//   }
// })

// Send io instance through routes
app.use(v1Routes(io));

// Listen on provided port, on all network interfaces
server.listen(port);

// - EACCES - Require elevated privileges
// - EADDRINUSE - Already in use
server.on("error", (error: any) => {
  onErrorEvent(error, port);
});

// Must be an address to listen
server.on("listening", () => {
  const addr = server.address();
  if (addr) {
    const bind = typeof addr === "string" ? "pipe " + addr : addr.port;

    console.info(`[Listening] on ${domain}: ${bind}`);
  }
});

export default server;
