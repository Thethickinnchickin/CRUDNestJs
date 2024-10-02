import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { StudentSchema } from './student/student.schema';
import { SeedModule } from './seed/seed.module';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { MetricsController } from './metrics/metrics.controller';

@Module({
  imports: [
    ConfigModule.forRoot(), // This will load your .env file
    MongooseModule.forRoot(process.env.MONGO_URI), // Connect to MongoDB using the URI from .env
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]), // Register the Student schema
    StudentModule,
    SeedModule,
    PrometheusModule.register({
      controller: MetricsController,
    }),
  ],
  controllers: [AppController, MetricsController],
  providers: [AppService],
})
export class AppModule {}
