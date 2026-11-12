import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  HasManyGetAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyRemoveAssociationMixin,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyRemoveAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyCountAssociationsMixin
} from "sequelize";
import { CompanyAddress } from "./companyaddress";

export class Company extends Model<InferAttributes<Company>, InferCreationAttributes<Company>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare activity: string;
  declare owner: string;
  declare imgpath: string;

  declare getAddresses: HasManyGetAssociationsMixin<CompanyAddress>;
  declare addAddress: HasManyAddAssociationMixin<CompanyAddress, number>;
  declare addAddresses: HasManyAddAssociationsMixin<CompanyAddress, number>;
  declare setAddresses: HasManySetAssociationsMixin<CompanyAddress, number>;
  declare removeAddress: HasManyRemoveAssociationMixin<CompanyAddress, number>;
  declare removeAddresses: HasManyRemoveAssociationsMixin<CompanyAddress, number>;
  declare hasAddress: HasManyHasAssociationMixin<CompanyAddress, number>;
  declare hasAddresses: HasManyHasAssociationsMixin<CompanyAddress, number>;
  declare countAddresses: HasManyCountAssociationsMixin;

  declare createAddress: HasManyCreateAssociationMixin<CompanyAddress, "Company_Id">;

  static associate(models: any) {
    Company.hasMany(models.CompanyAddress, {
      as: "addresses",
      foreignKey: "Company_Id",
      onDelete: "CASCADE",
      hooks: true
    });
  }
}

export default (sequelize: any) => {
  Company.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      activity: {
        type: DataTypes.STRING,
        allowNull: false
      },
      owner: {
        type: DataTypes.STRING,
        allowNull: false
      },
      imgpath: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: "Companies",
      timestamps: true
    }
  );

  return Company;
};
