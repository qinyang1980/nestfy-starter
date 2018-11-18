import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    PhotoModule
  ]
})
export class ApplicationModule {}
