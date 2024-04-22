// probes.model.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { ProvidedAdvances } from 'src/provided-advances/provided-advances.model';
import { Request } from 'src/requests/requests.model';
import { User } from 'src/users/users.model';

@Table
export class Probes extends Model<Probes> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column(DataType.STRING)
  title: string;

  @Column(DataType.DATE)
  date: Date;

  @Column(DataType.STRING)
  location: string;

  @Column(DataType.STRING)
  weight: string;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  employeeId: number;

  @ForeignKey(() => Request)
  @Column(DataType.INTEGER)
  requestId: number;

  @BelongsTo(() => Request)
  request: Request;

  @BelongsTo(() => User, 'employeeId')
  employee: User;

  @HasMany(() => ProvidedAdvances, 'idProbe')
  providedAdvances: ProvidedAdvances[];

}