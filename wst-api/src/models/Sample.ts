import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/index';

export default class Sample extends Model {
  public id: number;
  public city: string;
  public state: string;
  public ph: number;
  public conductivity: number;
  public dbo: number;
  public dqo: number;
  public fe: number;
  public mg: number;
  public ca: number;
}

Sample.init(
  {
    id: {
      type: DataTypes.INTEGER,
      defaultValue: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    ph: {
      type: DataTypes.DECIMAL,
      get() {
        // Workaround until sequelize issue #8019 is fixed
        const value = this.getDataValue('ph');
        return value === null ? null : parseFloat(value);
      },
    },
    conductivity: {
      type: DataTypes.DECIMAL,
      get() {
        const value = this.getDataValue('conductivity');
        return value === null ? null : parseFloat(value);
      },
    },
    turbidity: DataTypes.INTEGER,
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
