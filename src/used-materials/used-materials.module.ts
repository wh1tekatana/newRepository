// used-materials.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsedMaterialsService } from './used-materials.service';
import { UsedMaterialsController } from './used-materials.controller';
import { UsedMaterials } from './used-materials.model';

@Module({
  imports: [SequelizeModule.forFeature([UsedMaterials])],
  providers: [UsedMaterialsService],
  controllers: [UsedMaterialsController],
  exports: [UsedMaterialsService],
})
export class UsedMaterialsModule {}