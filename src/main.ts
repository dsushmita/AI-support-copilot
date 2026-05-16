import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove unknown fields silently
      forbidNonWhitelisted: true, // OR reject requests with extra fields
      transform: true, // auto-convert string→number, etc.
    }),
  );

  await app.listen(3000);
}
bootstrap();
