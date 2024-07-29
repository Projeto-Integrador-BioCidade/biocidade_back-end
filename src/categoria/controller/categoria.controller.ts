import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../entities/categoria.entity';

@Controller('/categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  
@Get()
@HttpCode(HttpStatus.OK)
findAll(): Promise<Categoria[]> {
  return this.categoriaService.findAll();
}

}