import { Injectable } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { Student } from 'src/student/student.schema';

@Injectable()
export class SeedService {
  constructor(private readonly studentService: StudentService) {}

  async populateDatabase() {
    const students: Student[] = [
      {
        name: 'Alice Johnson',
        roleNumber: 201,
        class: 10,
        gender: 'Female',
        marks: 92,
      },
      {
        name: 'Bob Lee',
        roleNumber: 202,
        class: 10,
        gender: 'Male',
        marks: 88,
      },
      {
        name: 'Charlie Brown',
        roleNumber: 203,
        class: 10,
        gender: 'Male',
        marks: 75,
      },
      {
        name: 'Dana White',
        roleNumber: 204,
        class: 10,
        gender: 'Female',
        marks: 82,
      },
      {
        name: 'Eve Green',
        roleNumber: 205,
        class: 10,
        gender: 'Female',
        marks: 95,
      },
    ];

    for (const student of students) {
      await this.studentService.create(student);
    }
    console.log('Database populated with sample student data!');
  }
}
