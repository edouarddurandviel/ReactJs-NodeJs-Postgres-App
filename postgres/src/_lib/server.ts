export const handleErrors = async (res: any, error: any) => {
  return res.status(error.statusCode).json({
    err: true,
    error: error.message
  });
};

// Normalize a port into a number, string, or false
export const normalizePort = (portValue: string) => {
  const port = parseInt(portValue, 10);

  if (isNaN(port)) {
    return portValue;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};


// Event listener for HTTP server "error" event
export const onErrorEvent = (error: NodeJS.ErrnoException, port: number | string | false) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  // Error messages
  switch (error.code && port) {
    // Pipe
    case "EACCES":
      throw new Error(`For pipe ${port} - permission denied: requires elevated privileges`);
  
    // Port
    case "EADDRINUSE":
      throw new Error(`For port address ${port} already in use`);


    default:
      throw error;
  }
};
