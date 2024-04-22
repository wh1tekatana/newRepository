// client-phys.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ClientPhys } from './client-phys.model';

@Injectable()
export class ClientPhysService {
  constructor(
    @InjectModel(ClientPhys)
    private clientPhysModel: typeof ClientPhys,
  ) {}

  async create(createClientDto: Partial<ClientPhys>): Promise<ClientPhys> {
    return this.clientPhysModel.create(createClientDto);
  }

  async findAll(): Promise<ClientPhys[]> {
    return this.clientPhysModel.findAll();
  }

  async findOne(id: number): Promise<ClientPhys> {
    return this.clientPhysModel.findByPk(id);
  }

  async update(id: number, updateClientDto: Partial<ClientPhys>): Promise<[number, ClientPhys[]]> {
    return this.clientPhysModel.update(updateClientDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number): Promise<void> {
    const client = await this.findOne(id);
    await client.destroy();
  }
}