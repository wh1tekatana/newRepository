import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { Request } from 'src/requests/requests.model';
import { ProvidedAdvances } from "src/provided-advances/provided-advances.model";

interface UserCreationAttrs {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  middleNmae: string;
  birthDate: string;
  hasDrivingLicense: boolean;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "froExample@gmail.com",
    description: "Почтовый адрес",
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: "1232ert123", description: "Пароль" })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: "true", description: "Забанен или нет" })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({
    example: "По причине жулик",
    description: "Причина блокировки",
  })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

  @ApiProperty({ example: "Иванов", description: "Фамилия" })
  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;

  @ApiProperty({ example: "Иван", description: "Имя" })
  @Column({ type: DataType.STRING, allowNull: false })
  firstName: string;

  @ApiProperty({ example: "Иванович", description: "Отчество" })
  @Column({ type: DataType.STRING, allowNull: true })
  middleName: string;

  @ApiProperty({ example: "1990-01-01", description: "Дата рождения" })
  @Column({ type: DataType.DATEONLY, allowNull: false })
  birthDate: Date;

  @ApiProperty({ example: "+79293838398", description: "Номер телефона" })
  @Column({ type: DataType.STRING, allowNull: false })
  phoneNumber: string;

  @ApiProperty({ example: "true", description: "Наличие водительских прав" })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  hasDrivingLicense: boolean;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasMany(() => Request, 'employeeId')
  employeeRequests: Request[];

  @HasMany(() => ProvidedAdvances, 'idEmployee')
  employeeAdvances: ProvidedAdvances[];

}
