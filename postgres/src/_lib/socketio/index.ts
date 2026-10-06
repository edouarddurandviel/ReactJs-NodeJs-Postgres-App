import { Server } from "socket.io";
import { UserRoutes } from "./routes";

export default (io: Server) => {
  io.on("connection", socket => {
    UserRoutes(io, socket);
    // other routes...
  });
};
