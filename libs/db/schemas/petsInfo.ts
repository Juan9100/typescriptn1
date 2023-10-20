import { model, Schema } from 'mongoose';

const petInfoSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    typeOfPet: { type: String, required: true }
})

export const petInfo = model('petInfo', petInfoSchema);
