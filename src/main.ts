import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Test API MSSQL example')
    .setDescription('The MSSQL API description')
    .setVersion('0.1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  app.enableCors();
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
  console.log(`API is running on: ${await app.getUrl()}`);
}
bootstrap();
