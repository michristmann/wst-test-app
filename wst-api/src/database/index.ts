import { Sequelize, Options } from 'sequelize';
import * as dbConfig from '../config/database.json';

const nodeEnv: string = process.env.NODE_ENV || 'development';

const options: Options = Object.assign(dbConfig[nodeEnv] ?? {});

const sequelize = new Sequelize(options);

export default sequelize;
