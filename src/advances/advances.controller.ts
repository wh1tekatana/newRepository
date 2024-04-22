
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AdvancesService } from './advances.service';
import { Advances } from './advances.model';

@Controller('advances')
export class AdvancesController {
  constructor(private readonly advancesService: AdvancesService) {}

  @Post()
  create(@Body() advances: Advances) {
    return this.advancesService.create(advances);
  }

  @Get()
  findAll() {
    return this.advancesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.advancesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.advancesService.remove(+id);
  }
}