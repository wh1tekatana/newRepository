// used-equipment.controller.ts
import { Controller, Get, Post, Delete, Param, Body, Query } from '@nestjs/common';
import { UsedEquipmentService } from './used-equipment.service';
import { UsedEquipment } from './used-equipment.model';

@Controller('used-equipment')
export class UsedEquipmentController {
  constructor(private readonly usedEquipmentService: UsedEquipmentService) {}

  @Post()
  create(@Body() usedEquipment: Partial<UsedEquipment>): Promise<UsedEquipment> {
    return this.usedEquipmentService.create(usedEquipment);
  }

//   @Get()
// async findAll(@Query('idProvidedAdvances') idProvidedAdvances) {
//   return this.usedEquipmentService.findAll(idProvidedAdvances);
// }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<UsedEquipment> {
    return this.usedEquipmentService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.usedEquipmentService.delete(id);
  }
}