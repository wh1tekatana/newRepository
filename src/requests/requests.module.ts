// requests.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RequestsController } from './requests.controller';
import { RequestsService } from './requests.service';
import { Request } from './requests.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { Role } from 'src/roles/roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';
import { ProvidedAdvancesModule } from 'src/provided-advances/provided-advances.module';

@Module({
  imports: [
    ProvidedAdvancesModule,
    SequelizeModule.forFeature([Request, Role, UserRoles]),
    RolesModule,
    forwardRef(()=> AuthModule),

],
  controllers: [RequestsController],
  providers: [RequestsService],
})
export class RequestsModule {}