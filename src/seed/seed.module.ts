import { Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { SeedService } from './seed.service';

@Module({
  imports: [StudentModule],
  providers: [SeedService],
})
export class SeedModule {}
