// used-materials.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UsedMaterials } from './used-materials.model';
import { Material } from 'src/materials/material.model';

@Injectable()
export class UsedMaterialsService {
  constructor(
    @InjectModel(UsedMaterials)
    private readonly usedMaterialsModel: typeof UsedMaterials,
  ) {}

  async create(usedMaterials: Partial<UsedMaterials>): Promise<UsedMaterials> {
    return this.usedMaterialsModel.create(usedMaterials);
  }

  async getUsedMaterialsByAdvanceId(idProvidedAdvances: number) {
    return this.usedMaterialsModel.findAll({
      where: { idProvidedAdvances },
      include: [{
        model: Material,
        as: 'material',
        attributes: ['id', 'name', 'price']
      }],
    });
  }

  async findOne(id: number): Promise<UsedMaterials> {
    return this.usedMaterialsModel.findByPk(id, { include: [Material] });
  }

  async delete(id: number): Promise<void> {
    const usedMaterials = await this.findOne(id);
    await usedMaterials.destroy();
  }
}