// result-of-analysis.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ResultOfAnalysisService } from './result-of-analysis.service';
import { ResultOfAnalysisController } from './result-of-analysis.controller';
import { ResultOfAnalysis } from './result-of-analysis.model';

@Module({
  imports: [SequelizeModule.forFeature([ResultOfAnalysis])],
  providers: [ResultOfAnalysisService],
  controllers: [ResultOfAnalysisController],
})
export class ResultOfAnalysisModule {}