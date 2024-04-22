// client-ur.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientUrService } from './client-ur.service';
import { ClientUrController } from './client-ur.controller';
import { ClientUr } from './client-ur.model';

@Module({
  imports: [SequelizeModule.forFeature([ClientUr])],
  providers: [ClientUrService],
  controllers: [ClientUrController],
})
export class ClientUrModule {}