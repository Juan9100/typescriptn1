import { Schema } from 'mongoose';

export const personSchema = new Schema({
  name: String,
  lastName: String,
  age: Number,
  birthdate: String,
  jobTitle: String
});
