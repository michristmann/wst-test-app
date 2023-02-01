import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/index';

export default class Sample extends Model {
  public id: number;
  public cidade: string;
  public estado: string;
  public ph: number;
  public condutividade: number;
  public turbidez: number;
  public dbo: number;
  public dqo: number;
  public fe: number;
  public mg: number;
  public ca: number;
}

Sample.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    ph: {
      type: DataTypes.DECIMAL,
      get() {
        // Workaround until sequelize issue #8019 is fixed
        const value = this.getDataValue('ph');
        return value === null ? null : parseFloat(value);
      },
    },
    condutividade: {
      type: DataTypes.DECIMAL,
      get() {
        const value = this.getDataValue('condutividade');
        return value === null ? null : parseFloat(value);
      },
    },
    turbidez: DataTypes.INTEGER,
    dbo: {
      type: DataTypes.DECIMAL,
      get() {
        const value = this.getDataValue('dbo');
        return value === null ? null : parseFloat(value);
      },
    },
    dqo: {
      type: DataTypes.DECIMAL,
      get() {
        const value = this.getDataValue('dqo');
        return value === null ? null : parseFloat(value);
      },
    },
    fe: {
      type: DataTypes.DECIMAL,
      get() {
        const value = this.getDataValue('fe');
        return value === null ? null : parseFloat(value);
      },
    },
    mg: {
      type: DataTypes.DECIMAL,
      get() {
        const value = this.getDataValue('mg');
        return value === null ? null : parseFloat(value);
      },
    },
    ca: {
      type: DataTypes.DECIMAL,
      get() {
        const value = this.getDataValue('ca');
        return value === null ? null : parseFloat(value);
      },
    },
  },
  {
    sequelize,
    modelName: 'sample',
  },
);
