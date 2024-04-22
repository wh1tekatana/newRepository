import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";
import { ValidationPipe } from "./pipes/validation.pipe";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Какой-то там проект для чего-то там')
    .setDescription('Тестовое описание ')
    .setVersion('1.0.0')
    .addTag('wh1tekatana')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  // app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () => {
    console.log(`Server started on port = ${PORT}`);
    console.log(`Swagger documentation is available at http://localhost:${PORT}/api/docs`);
  });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Это разрешит CORS для всех источников
  await app.listen(7001);
}
bootstrap();

start();