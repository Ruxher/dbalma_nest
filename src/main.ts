import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    
  });
  app.enableCors({
    origin: [
      'http://192.168.0.64:5173',
      'http://localhost:5173',
    ],
  })
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
await bootstrap();
