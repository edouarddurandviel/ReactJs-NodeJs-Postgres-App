import { ValidationError, UniqueConstraintError } from "sequelize";
import sequelize from "@src/models";

const dbInstance = sequelize.instance();

export const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export const forceSynchronization = async (args: any) => {
  try {
    await sequelize.sync(args);
    console.log("Tables has been synchronized successfully.");
  } catch (error) {
    console.error(error);
  }
};

export const poolConnection = async () => {
  return dbInstance.poolConnection();
};

export const getConnection = async (query: string, bindParams: any[]) => {
  // Pool initialization
  const conn = await dbInstance.getConnection();

  return async () => {
    await conn.query(query, bindParams);
    // When finished, release connection
    dbInstance.releaseConnection(conn);
  };
};

export const closeConnection = async () => {
  if (sequelize) {
    await sequelize.close();
  }
};

export const getDatabase = async () => {
  return sequelize;
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
