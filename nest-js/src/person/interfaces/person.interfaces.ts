import { Document } from 'mongoose';

export interface Person extends Document {
  readonly name: string,
  readonly lastName: string,
  readonly age: number,
  readonly birthdate: string,
  readonly jobTitle: string
};
