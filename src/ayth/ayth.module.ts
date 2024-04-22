// auth.module.ts
import { Module } from '@nestjs/common';
import { AythService } from './ayth.service';
import { AythController } from './ayth.controller';

@Module({
  providers: [AythService],
  controllers: [AythController],
})
export class AythModule {}