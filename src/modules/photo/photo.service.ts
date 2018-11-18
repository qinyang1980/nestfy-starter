import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { ModifyPhotoDto } from './dto/modify-photo.dto';
import { Photo } from './interfaces/photo.interface';

@Injectable()
export class PhotoService {
  constructor(
    @InjectModel('Photo')
    private readonly photoModel: Model<Photo>
  ) {}

  /**
   * 获取所有photos记录
   */
  public async findAll(): Promise<Photo[]> {
    return this.photoModel.find().exec();
  }

  /**
   * 根据id获取单个photo
   */
  public async findOneById(id: number): Promise<Photo> {
    return this.photoModel.findById(id).exec();
  }

  /**
   * 根据photo对象创建一个新的记录
   */
  public async create(createPhotoDto: CreatePhotoDto): Promise<Photo> {
    const createdPhoto = new this.photoModel(createPhotoDto);
    return await createdPhoto.save();
  }

  /**
   * 根据id，修改某条记录
   */
  public async modify(id: number, modifyPhotoDto: ModifyPhotoDto): Promise<Photo> {
    return this.photoModel.findByIdAndUpdate(id, modifyPhotoDto).exec();
  }

  /**
   * 删除某条记录
   */
  public async remove(id: number): Promise<any> {
    return this.photoModel.remove({id});
  }

  // /**
  //  * 数据库异常测试
  //  */
  // public async dbExceptionTest(): Promise<any> {
  //   const id: number = 3;
  //   return this.photoModel
  //     .createQueryBuilder('photo')
  //     .where('photo.id2 = :id', { id })
  //     .getMany();
  // }
}
