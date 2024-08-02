// export class Room {
//     id: number;
//     roomNumber: string;
//     capacity: number;
//     currentOccupancy: number;
//   }
  

// src/room.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Student } from './student.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Student, student => student.room)
  student: Student[];
}
