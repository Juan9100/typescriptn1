import type { Express } from 'express';
import * as controllers from '../../controllers';

export const petRoutes = (app: Express) => {
    app.get('/pets', controllers.getPetInfo);
    app.post('/pets', controllers.savePet);
}
