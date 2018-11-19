import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhotoController } from './photo.controller';
import { PhotoSchema } from './photo.schema';
import { PhotoService } from './photo.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Photo', schema: PhotoSchema }])],
  providers: [PhotoService],
  controllers: [PhotoController]
})
export class PhotoModule {}
