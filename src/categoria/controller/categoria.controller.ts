import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../entities/categoria.entity';

@Controller('/categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get(':id')
  @HttpCode(HttpStatus.OK) 
  findById(@Param('id', ParseIntPipe) id: number):Promise<Categoria>{
      return this.categoriaService.findById(id);
  }

  @Get('/tipo/:nome')
  @HttpCode(HttpStatus.OK) 
  findByTipo(@Param('nome') nome: string):Promise<Categoria[]>{
      return this.categoriaService.findByTipo(nome);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }

}