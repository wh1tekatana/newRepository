// client-phys.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientPhysService } from './client-phys.service';
import { ClientPhysController } from './client-phys.controller';
import { ClientPhys } from './client-phys.model';

@Module({
  imports: [SequelizeModule.forFeature([ClientPhys])],
  providers: [ClientPhysService],
  controllers: [ClientPhysController],
})
export class ClientPhysModule {}