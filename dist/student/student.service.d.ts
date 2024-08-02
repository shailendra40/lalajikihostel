import { Student } from '../student.entity';
import { PrismaService } from 'nestjs-prisma';
export declare class StudentService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<{
        id: number;
        name: string;
        email: string;
    }[]>;
    findById(id: number): Promise<{
        id: number;
        name: string;
        email: string;
    }>;
    create(student: Student): Promise<{
        id: number;
        name: string;
        email: string;
    }>;
    update(id: number, student: Student): Promise<any>;
    delete(id: number): Promise<void>;
}
