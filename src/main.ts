import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Biocidade')
  .setDescription('Projeto Integrador ODS 11')
  .setContact("Biocidades","https://github.com/Projeto-Integrador-BioCidade/biocidade_back-end","biocidades.projeto@gmail.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-03:00'; // Configuração de fuso horário

  app.useGlobalPipes(new ValidationPipe()); //Habilitamos o validation Globalmente

  app.enableCors(); //Habilitamos requisições de outras origens (Servdores)

  await app.listen(4000);
}
bootstrap();