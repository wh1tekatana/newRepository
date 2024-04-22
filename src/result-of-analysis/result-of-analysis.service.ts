// result-of-analysis.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ResultOfAnalysis } from './result-of-analysis.model';
import { Request } from '../requests/requests.model'

@Injectable()
export class ResultOfAnalysisService {
  constructor(
    @InjectModel(ResultOfAnalysis)
    private resultOfAnalysisModel: typeof ResultOfAnalysis,
  ) {}

  async create(result: Partial<ResultOfAnalysis>): Promise<ResultOfAnalysis> {
    return this.resultOfAnalysisModel.create(result);
  }

  async findAll(): Promise<ResultOfAnalysis[]> {
    return this.resultOfAnalysisModel.findAll();
  }

  async findByRequestId(requestId: number): Promise<ResultOfAnalysis> {
    return this.resultOfAnalysisModel.findOne({
      where: { requestId },
    });
  }
}