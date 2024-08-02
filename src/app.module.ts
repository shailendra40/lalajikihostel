// src/app.module.ts
import { Module } from '@nestjs/common';
import { RoomModule } from './room/room.module';
import { StudentModule } from './student/student.module';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    RoomModule,
    StudentModule,
  ],
  providers: [],
})
export class AppModule {}
