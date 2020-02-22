import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Cat } from './cats/interfaces/cat.interface';

@Controller('cats')
export class AppController {
  private readonly cats: Cat[] = [];
  constructor(private readonly appService: AppService) {}

  @Get('hey')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async create(@Body() cat: Cat) {
    this.cats.push(cat);
  }

  @Get()
  async getAll() {
    return this.cats;
  }
}
