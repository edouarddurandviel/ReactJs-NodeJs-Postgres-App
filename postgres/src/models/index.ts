import fs from "fs";
import path from "path";
import { Model, ModelStatic, Sequelize } from "sequelize";
import process from "process";
import cls from "cls-hooked";

let db: {
  sequelize?: Sequelize;
  Sequelize?: typeof Sequelize;
  [key: string]: any;
} = {};

export default {
  initSequelize: async () => {
    const configFile: any = {
      development: {
        username: "dbuser",
        password: "dbpassword",
        database: "mydatabase",
        host: "localhost",
        port: 5433,
        dialect: "postgres"
      },
      docker: {
        username: "dbuser",
        password: "dbpassword",
        database: "companiesdb",
        host: "postgresdb",
        port: 5432,
        dialect: "postgres"
      },
      test: {
        username: "dbuser",
        password: "dbpassword",
        database: "mydatabase",
        host: "localhost",
        port: 5433,
        dialect: "postgres"
      },
      production: {
        username: "dbuser",
        password: "dbpassword",
        database: "mydatabase",
        host: "localhost",
        port: 5433,
        dialect: "postgres"
      }
    };

    const env = process.env.NODE_ENV || "docker";
    const config = configFile[env];

    const namespace = cls.createNamespace("my-namesapace");
    Sequelize.useCLS(namespace);

    const sequelize = new Sequelize(config.database, config.username, config.password, config);
    const files = fs.readdirSync(__dirname);

    const basename = path.basename(__filename);
    const modelsFiles = files.filter(
      file => file.indexOf(".") !== 0 && file !== basename && file.endsWith(".ts")
    );

    for (const modelFile of modelsFiles) {
      const modelModule = await import(path.join(__dirname, modelFile));
      const modelFactory = modelModule.default || modelModule;
      const model: ModelStatic<Model> = modelFactory(sequelize);
      db[model.name] = model;
    }

    Object.keys(db).forEach((modelName: any) => {
      if (typeof db[modelName].associate === "function") {
        db[modelName].associate(db);
      }
    });

    if (db.sequelize) return;

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    return db;
  },

  instance: () => {
    return db;
  }
};
