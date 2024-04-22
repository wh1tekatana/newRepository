import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';
import { BanUserDto } from './dto/ban-user.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { Role } from 'src/roles/roles.model';



@Injectable()
export class UsersService {
    findOneById(id: any) {
      throw new Error("Method not implemented.");
    }

    constructor(@InjectModel(User) private UserRepository: typeof User,
                private roleService: RolesService) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.UserRepository.create(dto);
        const role = await this.roleService.getRoleByValue("ADMIN")
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user;
    }

    async getAllUsers() {
        try {
          const users = await this.UserRepository.findAll({ include: [Role] });
          return users;
        } catch (error) {
          throw new HttpException('Ошибка при получении пользователей', HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }

    async getUserByEmail(email: string){
        const user = await this.UserRepository.findOne({where: {email}, include:{all:true}})
        return user;
    }

    async addRole(dto: AddRoleDto) {
        const user = await this.UserRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if(role && user) {
            await user.$add('role', role.id);
            return dto;
        }
        throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
    }

    async ban(dto: BanUserDto) {
        const user = await this.UserRepository.findByPk(dto.userId);
        if (!user){
            throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND)
        }
        user.banned = true;
        user.banReason = dto.banReason;
        await user.save();
        return user;
    }

    async getUserById(id: string) {
        const user = await this.UserRepository.findByPk(id, { include: Role });
        if (user) {
          return user;
        }
        throw new Error('User not found');
    }

}
