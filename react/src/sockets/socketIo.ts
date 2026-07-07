import { io, Socket } from "socket.io-client";
import config from "../config";
let ioClient: Socket;

// Type	ID	Usage
// CONNECT -	0	- Used during the connection to a namespace.
// DISCONNECT -	1	- Used when disconnecting from a namespace.
// EVENT - 2	- Used to send data to the other side.
// ACK - 3	- Used to acknowledge an event.
// CONNECT_ERROR - 4	- Used during the connection to a namespace.
// BINARY_EVENT -	5	- Used to send binary data to the other side.
// BINARY_ACK -	6	- Used to acknowledge an event (the response includes binary data).

export default {
  createSocketIo: () => {
    if (!ioClient)
      ioClient = io(config.socket, {
        path: "/socket",
        autoConnect: true,
      });

    return ioClient;
  },
  getInstance: () => {
    return ioClient;
  },
};
