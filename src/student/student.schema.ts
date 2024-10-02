import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  roleNumber: number;

  @Prop({ required: true })
  class: number;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  marks: number;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
