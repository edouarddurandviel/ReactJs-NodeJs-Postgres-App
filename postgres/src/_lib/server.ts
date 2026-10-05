import { UniqueConstraintError, ValidationError } from "sequelize";

export const handleErrors = async (res: any, error: any) => {
   if (error instanceof ValidationError) {
   res.status(401).json({ 
      error: {
        message: "Validation Error",
        errors: error.errors.map(e => e.message)
      }
    });
  } else if (error instanceof UniqueConstraintError) {
    res.status(401).json({ 
      error: {
        message: "Duplicate value",
        errors: error.errors.map(e => e.message)
      }
    });
  } else
    return res.status(error.statusCode).json({ 
    error: error.message 
  });
};

// Normalize a port into a number, string, or false
export const normalizePort = (portValue: string) => {
  const port = parseInt(portValue, 10);

  if (isNaN(port)) {
    // named pipe
    return portValue;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};

// Event listener for HTTP server "error" event
export const onErrorEvent = (error: any, port: any) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  let msg = typeof port === "string" ? `Pipe: ${port}` : `Port: ${port}`;

  // Error messages
  switch (error.code) {
    case "EACCES":
      console.error(`${msg} requires elevated privileges`);

      break;
    case "EADDRINUSE":
      console.error(`${msg} is already in use`);

      break;
    default:
      throw error;
  }
};
