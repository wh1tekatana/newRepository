// clients.model.ts
import { Column, Model, Table, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { ClientPhys } from 'src/client-phys/client-phys.model';
import { ClientUr } from 'src/client-ur/client-ur.model';

@Table({ tableName: 'Clients', createdAt: false, updatedAt: false })
export class Clients extends Model<Clients> {
  @Column({
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => ClientUr)
  @Column
  idClientUr: number;

  @ForeignKey(() => ClientPhys)
  @Column
  idClientPhys: number;

  @BelongsTo(() => ClientUr)
  clientUr: ClientUr;

  @BelongsTo(() => ClientPhys)
  clientPhys: ClientPhys;
}
