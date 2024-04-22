import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Request } from './requests.model';
import { User } from 'src/users/users.model';
import { Probes } from 'src/probes/probes.model';
import { Clients } from 'src/clients/clients.model';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestStatusDto } from './dto/update-request-status.dto';
import { Op } from 'sequelize';
import { ResultOfAnalysis } from 'src/result-of-analysis/result-of-analysis.model';

@Injectable()
export class RequestsService {
  constructor(
    @InjectModel(Request)
    private requestModel: typeof Request,
  ) {}

  async findAll(): Promise<Request[]> {
    return this.requestModel.findAll({
      attributes: ['id', 'title', 'description', 'date', 'employeeId', 'clientId', 'status', 'createdAt', 'updatedAt'],
      include: [
        {
          model: User,
          as: 'employee',
          attributes: ['id', 'lastName', 'firstName', 'middleName'], // Выбираем только необходимые атрибуты сотрудника
        },
        {
          model: Clients,
          as: 'client',
        },
      ],
    });
  }

  async create(createRequestDto: CreateRequestDto): Promise<Request> {
    return this.requestModel.create(createRequestDto);
  }


  async findOne(id: number): Promise<Request> {
    return this.requestModel.findByPk(id, {
      attributes: ['id', 'title', 'description', 'date', 'employeeId', 'clientId', 'status', 'createdAt', 'updatedAt'],
      include: [
        {
          model: User,
          as: 'employee',
          attributes: ['id', 'lastName', 'firstName', 'middleName'], // Выбираем только необходимые атрибуты сотрудника
        },
        {
          model: Clients,
          as: 'client',
        },
        {
          model: ResultOfAnalysis,
          as: 'resultOfAnalysis',
        },
      ],
    });
  }

  async updateStatus(id: number, updateRequestStatusDto: UpdateRequestStatusDto): Promise<Request> {
    const request = await this.requestModel.findByPk(id);
    if (!request) {
      throw new Error('Request not found');
    }
    request.status = updateRequestStatusDto.status;
    return request.save();
  }

  async completeRequest(id: number): Promise<Request> {
    const request = await this.requestModel.findByPk(id);
    if (!request) {
      throw new Error('Request not found');
    }
    // Здесь должна быть логика формирования отчета
    // Например, вызов другого сервиса или метода, который будет сохранять отчет

    // Обновление статуса заявки на "Завершен"
    request.status = 'Завершен';
    return request.save();
  }

}