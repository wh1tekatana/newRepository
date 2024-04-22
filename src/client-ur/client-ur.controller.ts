// client-ur.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ClientUrService } from './client-ur.service';
import { ClientUr } from './client-ur.model';

@Controller('client-ur')
export class ClientUrController {
  constructor(private readonly clientUrService: ClientUrService) {}

  @Post()
  create(@Body() createClientDto: ClientUr) {
    return this.clientUrService.create(createClientDto);
  }

  @Get()
  findAll() {
    return this.clientUrService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientUrService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateClientDto: ClientUr) {
    return this.clientUrService.update(+id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientUrService.remove(+id);
  }
}