import { index, prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum TopLavelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class Hhdata {
  @prop()
  count: number;
  @prop()
  juniorSalary: number;
  @prop()
  middleSalary: number;
  @prop()
  seniorSlary: number;
}

export class TopPageAdvantage {
  @prop()
  title: string;
  @prop()
  description: string;
}

export interface TopPageModel extends Base {}
@index({ '$**': 'text' })
export class TopPageModel extends TimeStamps {
  @prop({ enum: TopLavelCategory })
  firstCategory: TopLavelCategory;
  @prop()
  secondCategory: string;
  @prop({ unique: true })
  alias: string;
  @prop()
  title: string;
  @prop()
  category: string;
  @prop({ type: () => Hhdata })
  hh?: Hhdata;
  @prop({ type: () => [TopPageAdvantage] })
  advantages: TopPageAdvantage[];
  @prop()
  seoText: string;
  @prop()
  tagsTitle: string;
  @prop({ type: () => [String] })
  tags: string[];
}
