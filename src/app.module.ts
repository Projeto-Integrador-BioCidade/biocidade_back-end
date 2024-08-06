import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutoModule } from './produto/produto.module';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AppController } from './app.controller';
import { ProdService } from './data/services/prod.service';
import { ConfigModule } from '@nestjs/config';
import { DevService } from './data/services/dev.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
	  useClass: ProdService,
    imports: [ConfigModule],
}),
    CategoriaModule,
    ProdutoModule,
    AuthModule,
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
