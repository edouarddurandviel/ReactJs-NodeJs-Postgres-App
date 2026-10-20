import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional
} from "sequelize";

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare email: string;
  declare password: string;
  declare salt: string;

  static associate(models: any) {
    User.hasOne(models.Rights, {
      foreignKey: "User_Id",
      as: "user_rights"
    });

    User.hasOne(models.Token, {
      foreignKey: "User_Id",
      as: "user_token"
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
