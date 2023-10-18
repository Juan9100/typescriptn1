import dotenv from 'dotenv';

import { Config } from '../types';

dotenv.config();

export const config : Config = {
    mongo: {
        mongoUri: process.env.MONGO_URL as string,
        dataBase: process.env.DB as string
    },
    port: process.env.PORT as string
};
