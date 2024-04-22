// probes.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProbesService } from './probes.service';
import { Probes } from './probes.model';
import { CreateProbeDto } from './dto/create-probe.dto';

@Controller('probes')
export class ProbesController {
  constructor(private readonly probesService: ProbesService) {}

  @Get()
  async findAll(): Promise<Probes[]> {
    return this.probesService.findAll();
  }

  @Post()
  async create(@Body() createProbeDto: CreateProbeDto): Promise<Probes> {
    return this.probesService.create(createProbeDto);
  }
  
}