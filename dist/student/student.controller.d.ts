import { Student } from '../student.entity';
import { StudentService } from './student.service';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    findAll(): Promise<Student[]>;
    findById(id: number): Promise<Student>;
    create(student: Student): Promise<Student>;
    update(id: number, student: Student): Promise<Student>;
    delete(id: number): Promise<void>;
}
