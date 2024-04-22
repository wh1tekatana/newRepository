// used-equipment.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UsedEquipment } from './used-equipment.model';
import { Equipment } from 'src/equipment/equipment.model';

@Injectable()
export class UsedEquipmentService {
  constructor(
    @InjectModel(UsedEquipment)
    private readonly usedEquipmentModel: typeof UsedEquipment,
  ) {}

  async create(usedEquipment: Partial<UsedEquipment>): Promise<UsedEquipment> {
    return this.usedEquipmentModel.create(usedEquipment);
  }

  async getUsedEquipmentsByAdvanceId(idProvidedAdvances: number): Promise<UsedEquipment[]> {
    return this.usedEquipmentModel.findAll({
      where: { idProvidedAdvances },
      include: [{
        model: Equipment,
        as: 'equipment',
        attributes: ['id', 'name', 'price']
      }],
    });
  }

  async findOne(id: number): Promise<UsedEquipment> {
    return this.usedEquipmentModel.findByPk(id, { include: [Equipment] });
  }

  async delete(id: number): Promise<void> {
    const usedEquipment = await this.findOne(id);
    await usedEquipment.destroy();
  }
}