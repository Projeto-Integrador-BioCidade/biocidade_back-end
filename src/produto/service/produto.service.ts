import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike, DeleteResult } from 'typeorm';
import { Produto } from '../entities/produto.entity';
import { CategoriaService } from '../../categoria/services/categoria.service';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
    private categoriaService: CategoriaService
  ) {}

  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find({
      relations: {
        categoria: true,
        usuario: true
      }
    });
  }

  async findById(id: number): Promise<Produto> {
    let buscarProduto = await this.produtoRepository.findOne({
      where: {
        id,
      },
      relations: {
        categoria: true,
        usuario: true
      }
    });

    if (!buscarProduto) {
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
    }

    return buscarProduto;
  }

  async findByNome(nome: string): Promise<Produto[]> {
    return await this.produtoRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
      relations: {
        categoria: true,
        usuario: true
      }
    });
  }

  async create(produto: Produto): Promise<Produto> {

    if(produto.categoria){
        let categoria = await this.categoriaService.findById(produto.categoria.id)

        if(!categoria){
            throw new HttpException("Categoria não foi encontrado", HttpStatus.NOT_FOUND)
        }

        else{
            return await this.produtoRepository.save(produto)
        }
    }
}

  async update(produto: Produto): Promise<Produto> {
    let buscarProduto = await this.findById(produto.id);

    if (!buscarProduto || !produto.id)
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);

    return await this.produtoRepository.save(produto);
  }

  async delete(id: number): Promise<DeleteResult> {
    let buscarProduto = await this.findById(id);

    if (!buscarProduto) {
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
    }

    return await this.produtoRepository.delete(id);
  }
}
