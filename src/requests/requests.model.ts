// requests.model.ts
import { Table, Column, Model, DataType, HasOne, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Probes } from 'src/probes/probes.model';
import { User } from '../users/users.model';
import { Clients } from 'src/clients/clients.model'; // Импорт модели Clients
import { ProvidedAdvances } from 'src/provided-advances/provided-advances.model';
import { ResultOfAnalysis } from 'src/result-of-analysis/result-of-analysis.model';

@Table
export class Request extends Model<Request> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column(DataType.STRING)
  title: string;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.DATE)
  date: Date;

  @BelongsTo(() => User, 'employeeId')
  employee: User;

  @BelongsTo(() => Clients, 'clientId')
  client: Clients;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  employeeId: number;

  @ForeignKey(() => Clients)
  @Column(DataType.INTEGER)
  clientId: number;

  @Column(DataType.STRING)
  status: string;

  @HasMany(() => ProvidedAdvances)
  providedAdvances: ProvidedAdvances[];

  @HasOne(() => ResultOfAnalysis)
  resultOfAnalysis: ResultOfAnalysis;
}