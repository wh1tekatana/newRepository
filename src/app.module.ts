import { Module } from "@nestjs/common";

import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';
import { RequestsModule } from './requests/requests.module';
import { ProbesModule } from './probes/probes.module';
import { ClientUrModule } from './client-ur/client-ur.module';
import { ClientPhysController } from './client-phys/client-phys.controller';
import { ClientPhysModule } from './client-phys/client-phys.module';
import { ClientUr } from "./client-ur/client-ur.model";
import { ClientPhys } from "./client-phys/client-phys.model";
import { Probes } from "./probes/probes.model";
import { Request } from "./requests/requests.model";
import { Clients } from "./clients/clients.model";
import { ClientsModule } from './clients/clients.module';
import { EquipmentModule } from './equipment/equipment.module';
import { MaterialService } from './materials/material.service';
import { MaterialModule } from './materials/material.module';
import { Equipment } from "./equipment/equipment.model";
import { Material } from "./materials/material.model";
import { AythModule } from './ayth/ayth.module';
import { AdvancesModule } from './advances/advances.module';
import { ProvidedAdvancesModule } from './provided-advances/provided-advances.module';
import { ProvidedAdvances } from "./provided-advances/provided-advances.model";
import { Advances } from "./advances/advances.model";
import { UsedMaterialsModule } from './used-materials/used-materials.module';
import { UsedMaterials } from "./used-materials/used-materials.model";
import { UsedEquipmentModule } from './used-equipment/used-equipment.module';
import { UsedEquipment } from "./used-equipment/used-equipment.model";
import { ResultOfAnalysisService } from './result-of-analysis/result-of-analysis.service';
import { ResultOfAnalysisModule } from './result-of-analysis/result-of-analysis.module';
import { ResultOfAnalysis } from "./result-of-analysis/result-of-analysis.model";




@Module( {
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath:`.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, ClientUr, ClientPhys, Probes, Request, Clients, Equipment, Material, ProvidedAdvances, Advances, UsedMaterials, UsedEquipment, ResultOfAnalysis],
            autoLoadModels: true,
          }),
        UsersModule,
        RolesModule,
        AuthModule,
        FilesModule,
        RequestsModule,
        ProbesModule,
        ClientUrModule,
        ClientPhysModule,
        ClientsModule,
        EquipmentModule,
        MaterialModule,
        AythModule,
        AdvancesModule,
        ProvidedAdvancesModule,
        UsedMaterialsModule,
        UsedEquipmentModule,
        ResultOfAnalysisModule,
    ]
})
export class AppModule {}