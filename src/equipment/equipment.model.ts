// equipment.model.ts
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { UsedEquipment } from 'src/used-equipment/used-equipment.model';

@Table
export class Equipment extends Model<Equipment> {
  @Column({type: DataType.INTEGER, autoIncrement: true, primaryKey: true, })
  id: number;

  @Column({type: DataType.STRING, allowNull: false,})
  name: string;

  @Column({type: DataType.DECIMAL(10, 2), allowNull: false,})
  price: number;

  @HasMany(() => UsedEquipment)
  usedEquipment: UsedEquipment[];
}