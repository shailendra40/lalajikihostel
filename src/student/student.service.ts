// src/student/student.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../student.entity';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class StudentService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.user.findMany();
  }

  async findById(id: number) {
    return this.prismaService.user.findFirst({
      where: {
        id,
      },
    });
  }

  async create(student: Student) {
    return this.prismaService.user.create({
      data: student,
    });
  }

  async update(id: number, student: Student) {
    await this.studentRepository.update(id, student);
    return this.studentRepository.findOne({
      where: {
        id,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
}
