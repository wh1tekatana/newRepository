// material.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Material } from './material.model';

@Injectable()
export class MaterialService {
  constructor(
    @InjectModel(Material)
    private materialModel: typeof Material,
  ) {}

  async create(material: Partial<Material>): Promise<Material> {
    return this.materialModel.create(material);
  }

  async findAll(): Promise<Material[]> {
    return this.materialModel.findAll();
  }

  async findOne(id: number): Promise<Material> {
    return this.materialModel.findByPk(id);
  }

  async remove(id: number): Promise<void> {
    const material = await this.findOne(id);
    await material.destroy();
  }
}