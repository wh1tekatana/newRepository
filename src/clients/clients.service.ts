// clients.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Clients } from './clients.model';
import { ClientPhys } from 'src/client-phys/client-phys.model';
import { ClientUr } from 'src/client-ur/client-ur.model';

@Injectable()
export class ClientsService {
  clientsService: any;
  constructor(
    @InjectModel(Clients)
    private clientModel: typeof Clients,
  ) {}

  async findAll(): Promise<Clients[]> {
    return this.clientModel.findAll({
      include: [ClientUr, ClientPhys],
    });
  }

  async findOne(id: number): Promise<Clients> {
    return this.clientModel.findByPk(id, {
      include: [ClientUr, ClientPhys],
    });
  }

  async create(clientData: { idClientUr?: number; idClientPhys?: number }): Promise<Clients> {
    return this.clientModel.create(clientData, {
      include: [ClientUr, ClientPhys],
    });
  }

  getClientInfo(clientId: number) {
    this.clientsService.findOne(clientId)
      .then(client => {
        console.log(client);
        // Здесь вы можете получить доступ к информации о клиенте, включая связанные модели
        if (client.clientUr) {
          console.log(client.clientUr.id);
        }
        if (client.clientPhys) {
          console.log(client.clientPhys.id);
        }
      })
      .catch(error => {
        console.error('Ошибка при получении информации о клиенте:', error);
      });
  }
}