import express from 'express';
import type { Express } from 'express';
import dotenv from 'dotenv';

import { connect } from '../libs';
import { router } from './routes';

dotenv.config();

const app: Express = express();

app.set('port', process.env.PORT);
app.use(express.json());

router(app);

app.listen(app.get('port'), async () => {
    await connect(process.env.MONGO_URL as string);
    console.log(`Listening on port ${app.get('port')}`)
});
