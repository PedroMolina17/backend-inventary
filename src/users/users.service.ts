import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaservice: PrismaService) {}
  async create(createUserDto: any) {
    return await this.prismaservice.user.create({ data: createUserDto });
  }

  async findAll() {
    return await this.prismaservice.user.findMany();
  }

  async findOne(id: number) {
    return await this.prismaservice.user.findUnique({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prismaservice.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return await this.prismaservice.user.delete({ where: { id } });
  }
}
