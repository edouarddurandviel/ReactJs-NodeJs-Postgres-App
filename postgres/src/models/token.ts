import {
  Model,
  DataTypes,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  Association
} from "sequelize";
import { User } from "./user";

export class Token extends Model<InferAttributes<Token>, InferCreationAttributes<Token>> {
  declare id: CreationOptional<number>;
  declare token: string;
  declare User_Id: number;

  static associate(models: any) {
    // foreign key defined in Token
    Token.belongsTo(models.User, {
      foreignKey: "User_Id"
    });
  }
}

export default (sequelize: any) => {
  Token.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      User_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      }
    },
    {
      sequelize,
      tableName: "Tokens",
      timestamps: true
    }
  );

  return Token;
};
