import { Body, Controller, HttpCode, HttpStatus, Post, Put, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../entities/categoria.entity';

@Controller('/categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.create(categoria);
  }
  @Get(':id')
  @HttpCode(HttpStatus.OK) 
  findById(@Param('id', ParseIntPipe) id: number):Promise<Categoria>{
      return this.categoriaService.findById(id);
  }

  
  @Put()
    @HttpCode(HttpStatus.OK)  
    update(@Body() categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.update(categoria);
    }
}
