import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_usuario'})
export class Usuario{

    @PrimaryGeneratedColumn()
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ name: 'nome', type: 'varchar', length: 255 })
    nome: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ name: 'usuario', type: 'varchar', length: 255 })
    usuario: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ name: 'senha', type: 'varchar', length: 255 })
    senha: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    tipo: string

    @Column()
    foto:string

}