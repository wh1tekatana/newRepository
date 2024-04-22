// client-phys.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ClientPhysService } from './client-phys.service';
import { ClientPhys } from './client-phys.model';

@Controller('client-phys')
export class ClientPhysController {
  constructor(private readonly clientPhysService: ClientPhysService) {}

  @Post()
  create(@Body() createClientDto: Partial<ClientPhys>) {
    return this.clientPhysService.create(createClientDto);
  }

  @Get()
  findAll() {
    return this.clientPhysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientPhysService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateClientDto: Partial<ClientPhys>) {
    return this.clientPhysService.update(+id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientPhysService.remove(+id);
  }
}