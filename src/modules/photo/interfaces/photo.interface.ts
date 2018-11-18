import { Document } from 'mongoose';

export interface Photo extends Document {
  readonly id: number;
  readonly name: string;
  readonly description: string;
}
