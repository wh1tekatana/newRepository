// equipment.model.ts
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { ProvidedAdvances } from 'src/provided-advances/provided-advances.model';

@Table
export class Advances extends Model<Advances> {
  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true, })
  id: number;

  @Column({type: DataType.STRING, allowNull: false,})
  name: string;

  @Column({type: DataType.DECIMAL(10, 2), allowNull: false,})
  price: number;

  @HasMany(() => ProvidedAdvances, 'idAdvances')
  providedAdvances: ProvidedAdvances[];
}