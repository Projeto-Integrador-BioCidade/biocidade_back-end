import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: 'tb_usuario'})
export class Usuario{

    @PrimaryGeneratedColumn()
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ name: 'nome', type: 'varchar', length: 255 })
    @ApiProperty() 
    nome: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ name: 'usuario', type: 'varchar', length: 255 })
    @ApiProperty() 
    usuario: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ name: 'senha', type: 'varchar', length: 255 })
    @ApiProperty() 
    senha: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    @ApiProperty() 
    tipo: string

    @Column()
    @ApiProperty() 
    foto:string

    @ApiProperty() 
    @OneToMany(() => Produto, (produto) => produto.usuario)
    produto: Produto[]

}