// client-phys.model.ts
import { Column, Model, Table, DataType, HasOne } from 'sequelize-typescript';
import { Clients } from 'src/clients/clients.model';

@Table
export class ClientPhys extends Model<ClientPhys> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  firstName: string;

  @Column({ type: DataType.STRING, allowNull: true })
  middleName: string;

  @Column({type: DataType.DATEONLY, allowNull: false})
  birthDate: Date;

  @Column({ type: DataType.STRING, allowNull: false })
  gender: string;

  @Column({ type: DataType.STRING, allowNull: true })
  phone: string;

  @Column({ type: DataType.STRING, allowNull: true })
  postalCode: string;

  @Column({ type: DataType.STRING, allowNull: true })
  address: string;

  @HasOne(() => Clients)
  client: Clients;
}