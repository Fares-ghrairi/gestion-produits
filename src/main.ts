import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // This reads the PORT from your .env file, or defaults to 3000 if not found
  await app.listen(process.env.PORT || 3002);
}
bootstrap();