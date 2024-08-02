// src/room/room.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Room } from '../room.entity';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  findAll(): Promise<Room[]> {
    return this.roomService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<Room> {
    return this.roomService.findById(id);
  }

  @Post()
  create(@Body() room: Room): Promise<Room> {
    return this.roomService.create(room);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() room: Room): Promise<Room> {
    return this.roomService.update(id, room);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.roomService.delete(id);
  }
}
