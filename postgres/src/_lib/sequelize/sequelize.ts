import { ValidationError, UniqueConstraintError } from "sequelize";
import sequelize from "@src/models";

const dbInstance = sequelize.instance();

export const checkConnection = async () => {
  try {
    await dbInstance.authenticate();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export const forceSynchronization = async (args: any) => {
  try {
    await dbInstance.sync(args);
  } catch (error) {
    console.error(error);
  }
};

export const poolConnection = async () => {
  return dbInstance.poolConnection();
};

export const getConnection = async (query: string, bindParams: any[]) => {
  const conn = await dbInstance.getConnection();

  return async () => {
    await conn.query(query, bindParams);
    dbInstance.releaseConnection(conn);
  };
};

export const closeConnection = async () => {
  if (dbInstance) {
    await dbInstance.close();
  }
};

export const getDatabase = async () => {
  return dbInstance;
};

export const manageError = (err: any) => {
  if (err instanceof ValidationError) {
    return {
      message: "Validation error",
      errors: err.errors.map(e => e.message)
    };
  } else if (err instanceof UniqueConstraintError) {
    return {
      message: "Duplicate value",
      errors: err.errors.map(e => e.message)
    };
  } else
    return {
      message: "Internal server error",
      error: err.message
    };
};
