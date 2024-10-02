import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() student: Student) {
    return this.studentService.create(student);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() student: Partial<Student>) {
    return this.studentService.update(id, student);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.studentService.delete(id);
  }
}
