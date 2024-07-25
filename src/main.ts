import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03:00'; // Configuração de fuso horário

  app.useGlobalPipes(new ValidationPipe()); //Habilitamos o validation Globalmente

  app.enableCors(); //Habilitamos requisições de outras origens (Servdores)

  await app.listen(4000);
}
bootstrap();