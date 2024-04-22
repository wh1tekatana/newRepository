// ProvidedAdvances.model.ts
import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Advances } from 'src/advances/advances.model';
import { Probes } from 'src/probes/probes.model';
import { User } from 'src/users/users.model';
import { Request } from 'src/requests/requests.model';
import { UsedMaterials } from 'src/used-materials/used-materials.model';
import { UsedEquipment } from 'src/used-equipment/used-equipment.model';

@Table
export class ProvidedAdvances extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column(DataType.DATE)
  date: Date;

  @ForeignKey(() => Advances)
  @Column(DataType.INTEGER)
  idAdvances: number;

  @ForeignKey(() => Probes)
  @Column(DataType.INTEGER)
  idProbe: number;

  @ForeignKey(() => Request)
  @Column(DataType.INTEGER)
  requestId: number;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  idEmployee: number;

  @BelongsTo(() => User, 'idEmployee')
  employee: User;

  @BelongsTo(() => Probes, 'idProbe')
  probe: Probes;

  @BelongsTo(() => Advances, 'idAdvances')
  advances: Advances;

  @HasMany(() => UsedMaterials)
  usedMaterials: UsedMaterials[];

  @HasMany(() => UsedEquipment)
  usedEquipment: UsedEquipment[];

  @BelongsTo(() => Request, 'requestId')
  request: Request;
}