// src/student/student.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Student } from '../student.entity';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<Student> {
    return this.studentService.findById(id);
  }

  @Post()
  create(@Body() student: Student): Promise<Student> {
    return this.studentService.create(student);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() student: Student): Promise<Student> {
    return this.studentService.update(id, student);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.studentService.delete(id);
  }
}
