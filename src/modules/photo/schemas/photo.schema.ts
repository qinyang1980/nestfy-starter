import * as mongoose from 'mongoose';

export const PhotoSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String
});
