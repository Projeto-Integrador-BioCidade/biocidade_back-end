import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from '../../produto/entities/produto.entity';

@Entity({ name: 'tb_categoria' })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ name: 'nome', type: 'varchar', length: 255 })
  nome: string;

  @IsNotEmpty()
  @Column({ name: 'descricao', length: 255 })
  descricao: string;

  @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto[];

}
