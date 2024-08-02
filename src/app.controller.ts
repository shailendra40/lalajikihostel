import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("hostel")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/lalaji")
  getHello(): string {
    return this.appService.getHello();
  }
}
