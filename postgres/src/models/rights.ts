import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional
} from "sequelize";

export class Rights extends Model<InferAttributes<Rights>, InferCreationAttributes<Rights>> {
  declare id: CreationOptional<number>;
  declare content: object;
  declare User_Id: number;

  static associate(models: any) {
    Rights.belongsTo(models.User, {
      foreignKey: "User_Id",
      as: "user_rights"
    });
  }
}

export default (sequelize: any) => {
  Rights.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      User_Id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      content: {
        type: DataTypes.JSONB,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: "Rights",
      timestamps: true
    }
  );

  return Rights;
};
