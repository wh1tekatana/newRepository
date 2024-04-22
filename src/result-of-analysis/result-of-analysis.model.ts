// result-of-analysis.model.ts
import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Request } from 'src/requests/requests.model';

@Table
export class ResultOfAnalysis extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @BelongsTo(() => Request)
  request: Request;

  @ForeignKey(() => Request)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  requestId: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  recommendations: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  analysisResult: string;
}