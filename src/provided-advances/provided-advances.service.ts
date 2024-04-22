// provided-advances.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProvidedAdvances } from './provided-advances.model';
import { User } from 'src/users/users.model';
import { Probes } from 'src/probes/probes.model';
import { Advances } from 'src/advances/advances.model';
import { UsedMaterials } from 'src/used-materials/used-materials.model';
import { UsedEquipment } from 'src/used-equipment/used-equipment.model';

@Injectable()
export class ProvidedAdvancesService {
  constructor(
    @InjectModel(ProvidedAdvances)
    private readonly providedAdvancesModel: typeof ProvidedAdvances,
  ) {}

  async findAll(): Promise<ProvidedAdvances[]> {
    return this.providedAdvancesModel.findAll({     
      include: [
        {
          model: User,
          as: 'employee',
          attributes: ['id', 'lastName', 'firstName', 'middleName'], 
        },
        {
          model: Probes,
          as: 'probe',
          attributes: ['id', 'title', 'date', 'location', 'weight', 'employeeId', 'requestId'], 
        },
        {
          model: Advances,
          as: 'advances',
          attributes: ['id', 'name', 'price'], 
        }
    ], // Включаем связанную модель Request
    
    });
  }

  async create(providedAdvance: Partial<ProvidedAdvances>): Promise<ProvidedAdvances> {
    return this.providedAdvancesModel.create(providedAdvance);
  }

  async delete(id: number): Promise<void> {
    const providedAdvance = await this.providedAdvancesModel.findByPk(id);
    if (providedAdvance) {
      await providedAdvance.destroy();
    }
  }

  async findByRequestId(requestId: number): Promise<ProvidedAdvances[]> {
    return this.providedAdvancesModel.findAll({
      where: { requestId },
      include: [
        {
          model: User,
          as: 'employee',
          attributes: ['id', 'lastName', 'firstName', 'middleName'],
        },
        {
          model: Probes,
          as: 'probe',
          attributes: ['id', 'title', 'date', 'location', 'weight', 'employeeId', 'requestId'],
        },
        {
          model: Advances,
          as: 'advances',
          attributes: ['id', 'name', 'price'],
        },
        {
          model: UsedMaterials,
          as: 'usedMaterials',
          attributes: ['id', 'idMaterial', 'quantity'],
        },
        {
          model: UsedEquipment,
          as: 'usedEquipment',
          attributes: ['id', 'idEquipment', 'quantity'],
        }
      ],
    });
  }
}