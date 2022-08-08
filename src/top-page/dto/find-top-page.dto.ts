import { IsEnum } from 'class-validator';
import { TopLavelCategory } from '../top-page.model';

export class FindTopPageDto {
  @IsEnum(TopLavelCategory)
  firstCategory: TopLavelCategory;
}
