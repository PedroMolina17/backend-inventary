import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImageService {
  constructor(private readonly prismaservice: PrismaService) {}
  async create(createImageDto: any) {
    return await this.prismaservice.image.create({
      data: createImageDto,
    });
  }

  async findAll() {
    return await this.prismaservice.image.findMany();
  }

  async findOne(id: number) {
    return await this.prismaservice.image.findUnique({ where: { id } });
  }

  async update(id: number, updateImageDto: UpdateImageDto) {
    return await this.prismaservice.image.update({
      where: { id },
      data: updateImageDto,
    });
  }

  async remove(id: number) {
    return await this.prismaservice.image.delete({ where: { id } });
  }
}
