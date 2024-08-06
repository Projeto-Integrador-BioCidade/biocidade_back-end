import {Body,Controller,HttpCode,HttpStatus,Post,Put,Get,
Param,ParseIntPipe,Delete,
UseGuards,} from '@nestjs/common';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../entities/categoria.entity';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Categoria')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('/categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK) 
  findById(@Param('id', ParseIntPipe) id: number):Promise<Categoria>{
      return this.categoriaService.findById(id);
  }

  @Get('/tipo/:nome')
  @HttpCode(HttpStatus.OK)
  findByTipo(@Param('nome') nome: string): Promise<Categoria[]> {
    return this.categoriaService.findByTipo(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.create(categoria);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.update(categoria);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number){
    return this.categoriaService.delete(id)
  }

}
