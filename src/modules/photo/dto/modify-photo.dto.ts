import { ApiModelProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';

export class ModifyPhotoDto {
  @IsString()
  @ApiModelProperty()
  public readonly name: string;

  @IsString()
  @ApiModelProperty()
  public readonly description: string;
}
