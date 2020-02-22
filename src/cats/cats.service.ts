import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCat, UpdateCat } from '../dto/cats';

@Injectable()
export class CatsService {
  private cats: Cat[] = [];
  private id = 1;

  create(cat: CreateCat) {   
    this.cats = [...this.cats, {id: this.id, ...cat}];
    this.id += 1
  }

  findAll(): Cat[] {
    return this.cats;
  }

  update(id: number, cat: UpdateCat): Cat {
    this.cats = [...this.cats.filter(row => row.id != id), {id, ...cat}];
    return {id, ...cat};
  }
}
