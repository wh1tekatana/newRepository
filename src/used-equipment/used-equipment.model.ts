// used-equipment.model.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Equipment } from 'src/equipment/equipment.model';
import { ProvidedAdvances } from 'src/provided-advances/provided-advances.model';

@Table
export class UsedEquipment extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Equipment)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idEquipment: number;

  @ForeignKey(() => ProvidedAdvances)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idProvidedAdvances: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  quantity: number;

  @BelongsTo(() => Equipment)
  equipment: Equipment;

  @BelongsTo(() => ProvidedAdvances)
  providedAdvance: ProvidedAdvances;
}