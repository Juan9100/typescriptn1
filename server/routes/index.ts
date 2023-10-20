import type { Express } from 'express';
import { petRoutes } from './pets';

export const router = (app: Express) => {
    petRoutes(app);
}
