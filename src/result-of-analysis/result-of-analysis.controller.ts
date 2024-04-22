// result-of-analysis.controller.ts
import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ResultOfAnalysisService } from './result-of-analysis.service';
import { ResultOfAnalysis } from './result-of-analysis.model';

@Controller('result-of-analysis')
export class ResultOfAnalysisController {
  constructor(private readonly resultOfAnalysisService: ResultOfAnalysisService) {}

  @Post()
  async create(@Body() createResultDto: ResultOfAnalysis) {
    return this.resultOfAnalysisService.create(createResultDto);
  }

  @Get()
  async findAll(): Promise<ResultOfAnalysis[]> {
    return this.resultOfAnalysisService.findAll();
  }

  @Get('request/:id')
  async findByRequestId(@Param('id', ParseIntPipe) id: number): Promise<ResultOfAnalysis> {
    return this.resultOfAnalysisService.findByRequestId(id);
  }
}