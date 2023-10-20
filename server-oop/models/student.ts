import { model, Schema } from 'mongoose';

const studentSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    modality: { type: String, required: true },
    shift: { type: String, required: true },
    socialStratum: { type: Number, required: true },
    age: { type: Number, required: true },
    id: { type: String, required: true },
    birthDate: { type: Date, required: true },
    overAge: { type: Boolean, required: true },
    levelOfStudies: { type: String, required: true }
})

export const StudentCollection = model('student', studentSchema);
