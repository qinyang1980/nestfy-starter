import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test', { useNewUrlParser: true }),
    PhotoModule
  ]
})
export class ApplicationModule {}
