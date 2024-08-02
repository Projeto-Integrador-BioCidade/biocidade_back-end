import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Produto } from '../entities/produto.entity';
import { ProdutoService } from '../service/produto.service';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';

@Controller('/produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.produtoService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
    return this.produtoService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome') nome: string): Promise<Produto[]> {
    return this.produtoService.findByNome(nome);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.create(produto);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.create(produto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete("/:id")
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.produtoService.delete(id);
  }
}
