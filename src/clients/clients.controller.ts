// clients.controller.ts
import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Clients } from './clients.model';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  async findAll() {
    return this.clientsService.findAll();
  }

  @Post()
  async create(@Body() clientData: { idClientUr?: number; idClientPhys?: number }) {
    return this.clientsService.create(clientData);
  }

  @Get(':id')
  async getClientInfo(@Param('id', ParseIntPipe) id: number): Promise<Clients> {
    return this.clientsService.findOne(id);
  }
}