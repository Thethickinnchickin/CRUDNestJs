import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
//import { SeedService } from './seed/seed.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions: {
      key: fs.readFileSync('../server.key'),
      cert: fs.readFileSync('../server.cert'),
    },
  });
  // const seedService = app.get(SeedService);
  // await seedService.populateDatabase();
  // await app.close(); // Close app after seeding
  // return;

  await app.listen(3000);
}
bootstrap();
