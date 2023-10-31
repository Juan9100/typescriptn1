import { Sequelize } from 'sequelize-typescript'
import mongoose from 'mongoose';
import { Person } from 'src/people/models';

export const dataBaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://127.0.0.1:27017/Person'),
  },
  {
    provide: 'POST_GRESQL_CONNECTION',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '',
        database: 'people'
      })
      sequelize.addModels([Person])
      await sequelize.sync();
      return sequelize;
    }
  }
];
