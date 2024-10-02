import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { SeedService } from './seed/seed.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const seedService = app.get(SeedService);
  // await seedService.populateDatabase();
  // await app.close(); // Close app after seeding
  // return;

  await app.listen(3000);
}
bootstrap();
