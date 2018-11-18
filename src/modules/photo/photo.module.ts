import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service';
import { PhotoSchema } from './schemas/photo.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Photo', schema: PhotoSchema }])],
  providers: [PhotoService],
  controllers: [PhotoController]
})
export class PhotoModule {}
