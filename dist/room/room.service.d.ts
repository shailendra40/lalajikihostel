import { Repository } from 'typeorm';
import { Room } from '../room.entity';
export declare class RoomService {
    private readonly roomRepository;
    constructor(roomRepository: Repository<Room>);
    findAll(): Promise<Room[]>;
    findById(id: number): Promise<Room>;
    create(room: Room): Promise<Room>;
    update(id: number, room: Room): Promise<Room>;
    delete(id: number): Promise<void>;
}
