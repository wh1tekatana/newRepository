// provided-advances.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProvidedAdvancesController } from './provided-advances.controller';
import { ProvidedAdvancesService } from './provided-advances.service';
import { ProvidedAdvances } from './provided-advances.model';
import { UsedMaterialsService } from 'src/used-materials/used-materials.service';
import { UsedMaterialsModule } from 'src/used-materials/used-materials.module';
import { UsedEquipmentModule } from 'src/used-equipment/used-equipment.module';

@Module({
  imports: [
    UsedMaterialsModule,
    UsedEquipmentModule,
    SequelizeModule.forFeature([ProvidedAdvances])],
  controllers: [ProvidedAdvancesController],
  providers: [ProvidedAdvancesService],
  exports: [ProvidedAdvancesService],
})
export class ProvidedAdvancesModule {}