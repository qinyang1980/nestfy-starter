import { ApiModelProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreatePhotoDto {
  @IsInt()
  @ApiModelProperty()
  public readonly id: number;

  @IsString()
  @ApiModelProperty()
  public readonly name: string;

  @IsString()
  @ApiModelProperty()
  public readonly description: string;
}
