// export class Student {
//     id: number;
//     name: string;
//     age: number;
//     department: string;
//   }
  
  // src/student.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Room } from './room.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Room, room => room.student)
  room: Room;
}
