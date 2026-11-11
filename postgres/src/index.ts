import "dotenv/config";
import http from "http";
import app from "@src/_config/app";
import socketIo from "@src/_lib/socketio";
import { onErrorEvent, normalizePort } from "@src/_lib/server";
import v1Routes from "@src/api/v1";
import sequelize from "@src/models";

const origin = process.env.REACT_API_PORT;
const domain = process.env.DOMAIN_URL;
const apiPort = process.env.PORT;

// Information comming from .env shall be normalized
// in that case converted to a Number.
const port = normalizePort(apiPort || "3000");
app.set("port", port);

// Create HTTP server.
const server = http.createServer(app);

// Initialize HTTP server with Socket.IO.
const io = socketIo.init(server, {
  path: "/socket",
  cors: {
    origin: [`${domain}:${origin}`]
  }
});

app.use(v1Routes(io));

// Sequelize initialization
sequelize.sync();

server.listen(port);

// - EACCES - Require elevated chmod privileges
// - EADDRINUSE - Port already in use
// - ENOENT - Files ro directory not found
server.on("error", (error: Error) => {
  onErrorEvent(error, port);
});

server.on("listening", () => {
  const addr = server.address();
  if (addr) {
    const port = typeof addr === "object" ? addr.port : addr;

    console.info(`[Listening] on ${domain}: ${port}`);
  }
});

export default server;
