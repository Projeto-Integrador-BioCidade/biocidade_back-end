import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name: "tb_produto"})
export class Produto{
    
    @ApiProperty()  
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()  
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ name: 'nome', type: 'varchar', length: 255 })
    nome: string;

    @ApiProperty()  
    @IsNumber({maxDecimalPlaces: 2})
    @IsNotEmpty()
    @Column({type: "decimal", precision:8, scale:2})
    preco: number

    @ApiProperty()  
    @IsNotEmpty()
    @Column({ name: 'descricao', length: 255 })
    descricao: string;

    @ApiProperty()  
    @Column()
    imagem_produto:string

    @ApiProperty({type: () => Categoria})  
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria;

    @ApiProperty({type: () => Usuario})  
    @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
        onDelete: "CASCADE"
    })
    usuario: Usuario

}