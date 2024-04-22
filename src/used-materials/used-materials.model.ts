// used-materials.model.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Material } from 'src/materials/material.model';
import { ProvidedAdvances } from 'src/provided-advances/provided-advances.model';

@Table
export class UsedMaterials extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Material)
  @Column({type: DataType.INTEGER, allowNull: false,})
  idMaterial: number;

  @ForeignKey(() => ProvidedAdvances)
  @Column({type: DataType.INTEGER, allowNull: false, })
  idProvidedAdvances: number;

  @Column({type: DataType.INTEGER, allowNull: false, })
  quantity: number;

  @BelongsTo(() => Material)
  material: Material;

  @BelongsTo(() => ProvidedAdvances)
  providedAdvance: ProvidedAdvances;
}