// client-ur.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ClientUr } from './client-ur.model';

@Injectable()
export class ClientUrService {
  constructor(
    @InjectModel(ClientUr)
    private clientUrModel: typeof ClientUr,
  ) {}

  async create(createClientDto: ClientUr): Promise<ClientUr> {
    return this.clientUrModel.create(createClientDto);
  }

  async findAll(): Promise<ClientUr[]> {
    return this.clientUrModel.findAll();
  }

  async findOne(id: number): Promise<ClientUr> {
    return this.clientUrModel.findByPk(id);
  }

  async update(id: number, updateClientDto: ClientUr): Promise<ClientUr> {
    const client = await this.clientUrModel.findByPk(id);
    return client.update(updateClientDto);
  }

  async remove(id: number): Promise<void> {
    const client = await this.clientUrModel.findByPk(id);
    await client.destroy();
  }
}