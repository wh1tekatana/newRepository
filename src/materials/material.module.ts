// material.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MaterialService } from './material.service';
import { MaterialController } from './material.controller';
import { Material } from './material.model';

@Module({
  imports: [SequelizeModule.forFeature([Material])],
  controllers: [MaterialController],
  providers: [MaterialService],
})
export class MaterialModule {}