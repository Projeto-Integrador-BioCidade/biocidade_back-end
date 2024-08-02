import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoService } from './service/produto.service';
import { Produto } from './entities/produto.entity';
import { ProdutoController } from './controller/produto.controller';
import { CategoriaModule } from '../categoria/categoria.module';
import { CategoriaService } from '../categoria/services/categoria.service';

@Module({
  imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
  providers: [ProdutoService, CategoriaService],
  controllers: [ProdutoController],
  exports: [TypeOrmModule],
})
export class ProdutoModule {}
