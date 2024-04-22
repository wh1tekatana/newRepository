// material.model.ts
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { UsedMaterials } from 'src/used-materials/used-materials.model';

@Table
export class Material extends Model<Material> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price: number;

  @HasMany(() => UsedMaterials)
  usedMaterials: UsedMaterials[];
}