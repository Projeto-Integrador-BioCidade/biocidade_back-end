import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from '../entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

 
  async findAll(): Promise<Categoria[]> {
    return await this.categoriaRepository.find();

  }

  async findById(id: number): Promise<Categoria>{

    let buscarCategoria = await this.categoriaRepository.findOne({
      where:{
        id
      }
    })

    if(!buscarCategoria){
      throw new HttpException("Categoria não encontrada!", HttpStatus.NOT_FOUND)
    }

    return buscarCategoria;
  }

}
