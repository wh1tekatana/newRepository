// used-materials.controller.ts
import { Controller, Get, Post, Delete, Param, Body, Query } from '@nestjs/common';
import { UsedMaterialsService } from './used-materials.service';
import { UsedMaterials } from './used-materials.model';
import { CreateUsedMaterialsDto } from './dto/create-used-materials.dto';

@Controller('used-materials')
export class UsedMaterialsController {
  constructor(private readonly usedMaterialsService: UsedMaterialsService) {}

  @Post()
async create(@Body() createUsedMaterialsDto: CreateUsedMaterialsDto): Promise<UsedMaterials> {
  return this.usedMaterialsService.create(createUsedMaterialsDto);
}

// @Get()
// async findAll(@Query('idProvidedAdvances') idProvidedAdvances) {
//   return this.usedMaterialsService.findAll(idProvidedAdvances);
// }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<UsedMaterials> {
    return this.usedMaterialsService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.usedMaterialsService.delete(id);
  }
}