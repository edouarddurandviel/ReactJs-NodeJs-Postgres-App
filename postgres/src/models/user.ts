import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  HasOneGetAssociationMixin,
  HasOneSetAssociationMixin,
} from "sequelize";
import { Rights } from "./rights";
import { Token } from "./token";

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare email: string;
  declare password: string;
  declare salt: string;

  declare getUserRights: HasOneGetAssociationMixin<Rights>;
  declare setUserRights: HasOneSetAssociationMixin<Rights, "User_Id">;

  declare setUserToken: HasOneSetAssociationMixin<Token, "User_Id">;
  declare getUserToken: HasOneGetAssociationMixin<Token>;

  static associate(models: any) {
    User.hasOne(models.Rights, {
      foreignKey: "User_Id",
      as: "userRights",
      onDelete: "CASCADE",
      hooks: true
    });

    User.hasOne(models.Token, {
      foreignKey: "User_Id",
      as: "userToken",
      onDelete: "CASCADE",
      hooks: true
    });
  }
}

export default (sequelize: any) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      salt: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: "Users",
      timestamps: true
    }
  );

  return User;
};
