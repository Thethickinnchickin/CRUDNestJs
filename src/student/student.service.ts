import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from './student.schema';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  // Create a new student
  async create(student: Student): Promise<Student> {
    const newStudent = new this.studentModel(student);
    return newStudent.save();
  }

  // Get all students
  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  // Find a student by ID
  async findOne(id: string): Promise<Student> {
    return this.studentModel.findById(id).exec();
  }

  // Update a student
  async update(id: string, student: Partial<Student>): Promise<Student> {
    return this.studentModel
      .findByIdAndUpdate(id, student, { new: true })
      .exec();
  }

  // Delete a student by ID
  async delete(id: string): Promise<Student> {
    return this.studentModel.findByIdAndDelete(id).exec();
  }
}
