// used-equipment.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsedEquipmentService } from './used-equipment.service';
import { UsedEquipmentController } from './used-equipment.controller';
import { UsedEquipment } from './used-equipment.model';

@Module({
  imports: [SequelizeModule.forFeature([UsedEquipment])],
  providers: [UsedEquipmentService],
  controllers: [UsedEquipmentController],
  exports: [UsedEquipmentService],
})
export class UsedEquipmentModule {}