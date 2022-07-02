import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { Log4jsLogger } from './libs/log4js/';

const ENV = process.env.NODE_ENV;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.useLogger(app.get(Log4jsLogger));

  if (ENV !== 'prod') {
    const options = new DocumentBuilder()
      .setTitle('API')
      .setDescription('API description')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api-docs', app, document);
  }

  await app.listen(3050);
  console.log(`app started at ${await app.getUrl()}`);
}
bootstrap();
