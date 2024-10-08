import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
import { ImageModule } from './image/image.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    PrismaModule,
    ProductModule,
    UsersModule,
    ImageModule,
    CategoryModule,
  ],
})
export class AppModule {}
