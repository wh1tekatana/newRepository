// equipment.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Advances } from './advances.model';

@Injectable()
export class AdvancesService {
  constructor(
    @InjectModel(Advances)
    private advancesModel: typeof Advances ,
  ) {}

  async create(advances : Partial<Advances >): Promise<Advances > {
    return this.advancesModel.create(advances);
  }

  async findAll(): Promise<Advances[]> {
    return this.advancesModel.findAll();
  }

  async findOne(id: number): Promise<Advances> {
    return this.advancesModel.findByPk(id);
  }


  async remove(id: number): Promise<void> {
    const advances = await this.findOne(id);
    await advances.destroy();
  }
}