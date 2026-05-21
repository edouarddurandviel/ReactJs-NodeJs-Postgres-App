import "dotenv/config";
import http from "http";
import app from "./_config/app";
import socketIo from "@libs/socketio";
import { onError, normalizePort } from "@libs/server";
import v1Routes from "./_api/v1";

// Get port from environment and store in Express.
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// Create HTTP server.
const server = http.createServer(app);

// Initialize With an HTTP server.
const origin = process.env.REACT_API_PORT;
const io = socketIo.init(server, {
  path: "/socket",
  cors: {
    origin: [`http://localhost:${origin}`]
  }
});

// Send io instance through routes
app.use(v1Routes(io));

// Listen on provided port, on all network interfaces.
server.listen(port);

// EACCES require elevated privileges - EADDRINUSE already in use
server.on("error", (error: any) => {
  onError(error, port);
});

// Must be an address to listen
server.on("listening", () => {
  const addr = server.address();
  if (addr) {
    const bind = typeof addr === "string" ? "pipe " + addr : addr.port;

    console.info(`[Listening] on http://localhost: ${bind}`);
  }
});

export default server;
