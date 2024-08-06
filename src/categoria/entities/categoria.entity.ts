import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from '../../produto/entities/produto.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_categoria' })
export class Categoria {

  @ApiProperty()   
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()   
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ name: 'nome', type: 'varchar', length: 255 })
  nome: string;

  @ApiProperty()   
  @IsNotEmpty()
  @Column({ name: 'descricao', length: 255 })
  descricao: string;

  @ApiProperty()   
  @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto[];

}
