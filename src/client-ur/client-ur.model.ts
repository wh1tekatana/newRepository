// client-ur.model.ts
import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';
import { Clients } from 'src/clients/clients.model';

@Table
export class ClientUr extends Model<ClientUr> {
  @Column({
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  inn: string;

  @Column({ type: DataType.STRING, allowNull: false })
  account: string;

  @Column({ type: DataType.STRING, allowNull: false })
  address: string;

  @Column({ type: DataType.STRING, allowNull: false })
  phone: string;

  @Column({ type: DataType.STRING, allowNull: false })
  kpp: string;

  @Column({ type: DataType.STRING, allowNull: false })
  okpo: string;

  @Column({ type: DataType.STRING, allowNull: false })
  ogrn: string;

  @Column({ type: DataType.STRING, allowNull: false })
  countryRegistration: string;

  @Column({ type: DataType.STRING, allowNull: false })
  postalCode: string;

  @HasOne(() => Clients)
  client: Clients;
}