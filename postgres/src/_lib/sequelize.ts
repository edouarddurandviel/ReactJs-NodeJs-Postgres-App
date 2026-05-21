import { Sequelize, ValidationError, UniqueConstraintError } from "sequelize";
import config from "../_config/postgres";

let db: any;

// export const sequelize = new Sequelize(config.db!, config.user!, config.password!, {
//   dialect: "postgres",
//   host: config.host!,
//   port: Number(config.port!) || 3306,
//   logging: console.log
// });

// export const checkConnection = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

// export const forceSynchronization = async (args: any) => {
//   try {
//     await sequelize.sync(args);
//     console.log("Tables has been synchronized successfully.");
//   } catch (err) {
//     console.log(err);
//   }
// };

export const poolConnection = async () => {
  if (db) return;

  return db;
};

export const getConnection = async (query: string, bindParams: any[]) => {
  // For pool initialization, see above
  const conn = await db.getConnection();

  return async () => {
    // Do something with the connection
    await conn.query(query, bindParams);
    // Don't forget to release the connection when finished!
    db.releaseConnection(conn);
  };
};

// export const closeConnection = async () => {
//   if (sequelize) {
//     await sequelize.close();
//   }
// };

export const getDatabase = async () => {
  return db;
};

export const dbErrors = (err: any) => {
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
