import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { LoggingInterceptor } from './intercepter/auth.intercepter';

import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   app.enableCors({
    origin: '*',
  });
  app.useGlobalInterceptors(new LoggingInterceptor());

  // enable access for frontend 
    app.enableCors();
  app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }),
);
  app.useWebSocketAdapter(new IoAdapter(app));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
