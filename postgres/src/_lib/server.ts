export const handleErrors = async (res: any, error: any) => {
  return res.status(error.statusCode).json({
    err: true,
    error: error.message
  });
};

// Normalize .env port into a number, string, or false
export const normalizePort = (portValue: string) => {
  const port = Number(portValue);

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
    case "EACCES":
      throw new Error(`For port ${port} - permission denied: requires elevated chmod privileges`);

    case "ENOENT":
      throw new Error(`For port ${port} - File or directory not found`);

    case "EADDRINUSE":
      throw new Error(`Port address ${port}: already in use`);

    default:
      throw error;
  }
};

// Websocket emit instruction only
// if response statusCode
// is in between 500 and 599
export const noServerError = (
  statusCode: number,
  start: number = 500,
  stop: number = 599,
  step = 1
): Boolean => {
  const codes = Array.from(
    {
      length: Math.floor((stop - start) / step) + 1
    },
    (_, i) => start + i * step
  );
  return !codes.includes(statusCode);
};
