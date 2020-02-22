import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCat, UpdateCat } from '../dto/cats';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get()
  async getAll() {
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() cat: CreateCat) {
    return this.catsService.create(cat);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() cat: UpdateCat) {
    return this.catsService.update(id, cat);
  }
}
