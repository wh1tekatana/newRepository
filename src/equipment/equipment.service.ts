// equipment.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Equipment } from './equipment.model';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectModel(Equipment)
    private equipmentModel: typeof Equipment,
  ) {}

  async create(equipment: Partial<Equipment>): Promise<Equipment> {
    return this.equipmentModel.create(equipment);
  }

  async findAll(): Promise<Equipment[]> {
    return this.equipmentModel.findAll();
  }

  async findOne(id: number): Promise<Equipment> {
    return this.equipmentModel.findByPk(id);
  }


  async remove(id: number): Promise<void> {
    const equipment = await this.findOne(id);
    await equipment.destroy();
  }
}