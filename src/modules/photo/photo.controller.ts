import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { ForbiddenException, InternalServerErrorException } from '@nestjs/common';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { AuthGuard, logger } from 'nestfy';
import * as rp from 'request-promise';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { ModifyPhotoDto } from './dto/modify-photo.dto';
import { Photo } from './interfaces/photo.interface';
import { PhotoService } from './photo.service';

@ApiUseTags('photos')
@Controller('photos')
export class PhotoController {
  constructor(private readonly _photoService: PhotoService) {}

  @Post()
  public async create(@Body() dto: CreatePhotoDto): Promise<Photo> {
    return this._photoService.create(dto);
  }

  @Get()
  public async findAll(): Promise<Photo[]> {
    logger.info('test debug');
    return this._photoService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id', new ParseIntPipe()) id: number): Promise<Photo> {
    return this._photoService.findOneById(id);
  }

  @Put(':id')
  public async modify(@Param('id', new ParseIntPipe()) id: number, @Body() dto: ModifyPhotoDto): Promise<Photo> {
    return this._photoService.modify(id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  public async remove(@Param('id', new ParseIntPipe()) id: number): Promise<any> {
    return this._photoService.remove(id);
  }

  // 转发测试
  @Get('transfer/test')
  public async transfer(): Promise<any> {
    const options = {
      uri: 'https://jsonplaceholder.typicode.com/todos',
      json: true
    };

    const ret = await rp(options);
    return ret;
  }

  // 异常测试
  @Get('exception/normal-error')
  public async testNormalError(): Promise<any> {
    throw new InternalServerErrorException(`内部错误`);
  }

  @Get('exception/special-error')
  public async testForbiddenError(): Promise<any> {
    throw new ForbiddenException('禁止访问');
  }

  @Get('exception/programming-error')
  public async testProgrammingError(): Promise<any> {
    return (this as any).func2222();
  }

  // @Get('exception/database-error')
  // public async testDatabaseError(): Promise<any> {
  //   return this._photoService.dbExceptionTest();
  // }
}
