import createError from "http-errors";

export const handleErrors = async (error: any) => {
  createError(404, error);
};

// Normalize a port into a number, string, or false.
export const normalizePort = (val: string) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

// Event listener for HTTP server "error" event.
export const onError = (error: any, port: any) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  let bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");

      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");

      break;
    default:
      throw error;
  }
};
