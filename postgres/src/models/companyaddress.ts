import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional
} from "sequelize";

export class CompanyAddress extends Model<
  InferAttributes<CompanyAddress>,
  InferCreationAttributes<CompanyAddress>
> {
  declare id: CreationOptional<number>;
  declare Company_Id: number;
  declare street: string;
  declare postcode: number;
  declare city: string;
  static associate(models: any) {
    CompanyAddress.belongsTo(models.Company, {
      foreignKey: "Company_Id",
      as: "company"
    });
  }
}

export default (sequelize: any) => {
  CompanyAddress.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Company_Id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false
      },
      postcode: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: "CompanyAddresses",
      timestamps: true
    }
  );

  return CompanyAddress;
};
