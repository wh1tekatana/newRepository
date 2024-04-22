// probes.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProbesController } from './probes.controller';
import { ProbesService } from './probes.service';
import { Probes } from './probes.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { Role } from 'src/roles/roles.model';

@Module({
  imports: [SequelizeModule.forFeature([Probes, Role, UserRoles])],
  controllers: [ProbesController],
  providers: [ProbesService],
})
export class ProbesModule {}