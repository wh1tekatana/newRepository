// equipment.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdvancesService } from './advances.service';
import { AdvancesController } from './advances.controller';
import { Advances } from './advances.model';

@Module({
  imports: [SequelizeModule.forFeature([Advances])],
  controllers: [AdvancesController],
  providers: [AdvancesService],
})
export class AdvancesModule {}