import { Document } from 'mongoose';

export interface Photo extends Document {
  readonly id: number; // 图书编号
  readonly name: string; // 图书名称
  readonly description: string; // 图书描述
}
