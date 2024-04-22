// probes.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Probes } from './probes.model';
import { Request } from 'src/requests/requests.model'; // Предполагается, что у вас есть модель Request
import { User } from 'src/users/users.model';

@Injectable()
export class ProbesService {
  constructor(
    @InjectModel(Probes)
    private probeModel: typeof Probes,
  ) {}

  async findAll(): Promise<Probes[]> {
    return this.probeModel.findAll({
      include: [
        {
          model: Request,
          as: 'request',
          attributes: ['id', 'title', 'date', 'employeeId', 'clientId'], 
        },
        {
          model: User,
          as: 'employee',
          attributes: ['id', 'lastName', 'firstName', 'middleName'], 
        }
    ], // Включаем связанную модель Request
    });
  }

  async create(probe: Partial<Probes>): Promise<Probes> {
    return this.probeModel.create(probe);
  }
}