import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {
    
    @ApiProperty({example: 'forExample@gmail.com', description: 'Почта'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: 'Некорректный Email'})
    readonly email: string;
    
    @ApiProperty({example: '12er12re', description: 'Пароль'})
    @IsString({message: 'Должно быть строкой'})
    @Length(4, 16, {message: 'Не меньше 4 и не больше 16 символов'})
    readonly password: string;

    @ApiProperty({example: 'Иванов', description: 'Фамилия'})
    @IsString({message: 'Должно быть строкой'})
    readonly lastName: string;

    @ApiProperty({example: 'Иван', description: 'Имя'})
    @IsString({message: 'Должно быть строкой'})
    readonly firstName: string;

    @ApiProperty({example: 'Иванович', description: 'Отчество'})
    @IsString({message: 'Должно быть строкой'})
    readonly middleName: string;

    @ApiProperty({example: 'Иванович', description: 'Отчество'})
    @IsDateString({}, {message: 'Должно быть датой'})
    readonly birthDate: string;

    @ApiProperty({example: 'Иванович', description: 'Отчество'})
    @IsNotEmpty({message: 'Должно быть true или false'})
    readonly hasDrivingLicense: boolean;

}