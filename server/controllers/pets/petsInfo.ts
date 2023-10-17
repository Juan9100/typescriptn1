import {
    Request,
    Response,
    NextFunction
} from 'express';

import { getPetsInfo, savePetInfo } from '../../services';
import { limitSchema, petInfoSchema } from './pet.dto';

export const getPetInfo = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const limit = await limitSchema.validateAsync(req.query.limit);
        const result = await getPetsInfo(limit);

        res.send(result);
    } catch(err) {
        next(err);
    } 
}

export const savePet = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const petToSave = await petInfoSchema.validateAsync(req.body);

        const result = await savePetInfo(petToSave);

        res.send(result);
    } catch(err) {
        next(err);
    }
}
