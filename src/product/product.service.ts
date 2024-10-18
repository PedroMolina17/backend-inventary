import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createProductDto: any) {
    return await this.prismaService.product.create({ data: createProductDto });
  }

  async findAll() {
    return await this.prismaService.product.findMany({
      include: { images: true },
    });
  }

  async findLowStockProducts() {
    return await this.prismaService.product.count({
      where: {
        stock: {
          lt: 100,
        },
      },
    });
  }

  async countAll() {
    return await this.prismaService.product.count();
  }

  async findOne(id: number) {
    return await this.prismaService.product.findUnique({
      where: { id: id },
      include: { images: true },
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.prismaService.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.product.delete({ where: { id } });
  }
}
