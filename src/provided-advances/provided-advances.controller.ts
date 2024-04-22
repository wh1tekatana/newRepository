// provided-advances.controller.ts
import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { ProvidedAdvancesService } from './provided-advances.service';
import { ProvidedAdvances } from './provided-advances.model';
import { UsedEquipmentService } from 'src/used-equipment/used-equipment.service';
import { UsedMaterialsService } from 'src/used-materials/used-materials.service';

@Controller('provided-advances')
export class ProvidedAdvancesController {

  constructor(
    private readonly providedAdvancesService: ProvidedAdvancesService,
    private readonly usedMaterialsService: UsedMaterialsService,
    private readonly usedEquipmentService: UsedEquipmentService
  ) {}

  @Get()
  async findAll() {
    return this.providedAdvancesService.findAll();
  }

  @Post()
  async create(@Body() providedAdvance: Partial<ProvidedAdvances>) {
    return this.providedAdvancesService.create(providedAdvance);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.providedAdvancesService.delete(id);
  }

  @Get(':id/used-materials')
  async getUsedMaterials(@Param('id') id: string) {
    return this.usedMaterialsService.getUsedMaterialsByAdvanceId(+id);
  }

  @Get(':id/used-equipments')
  async getUsedEquipments(@Param('id') id: string) {
    return this.usedEquipmentService.getUsedEquipmentsByAdvanceId(+id);
  }
}