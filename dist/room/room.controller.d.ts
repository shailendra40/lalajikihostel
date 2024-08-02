import { Room } from '../room.entity';
import { RoomService } from './room.service';
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    findAll(): Promise<Room[]>;
    findById(id: number): Promise<Room>;
    create(room: Room): Promise<Room>;
    update(id: number, room: Room): Promise<Room>;
    delete(id: number): Promise<void>;
}
