"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
let StudentService = class StudentService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll() {
        return this.prismaService.user.findMany();
    }
    async findById(id) {
        return this.prismaService.user.findFirst({
            where: {
                id,
            },
        });
    }
    async create(student) {
        return this.prismaService.user.create({
            data: student,
        });
    }
    async update(id, student) {
        await this.studentRepository.update(id, student);
        return this.studentRepository.findOne({
            where: {
                id,
            },
        });
    }
    async delete(id) {
        await this.studentRepository.delete(id);
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], StudentService);
//# sourceMappingURL=student.service.js.map