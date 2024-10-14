import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
import { ImageModule } from './image/image.module';
import { CategoryModule } from './category/category.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'images'),
    }),
    PassportModule,
    PrismaModule,
    ProductModule,
    UsersModule,
    ImageModule,
    CategoryModule,
    AuthModule,
  ],
})
export class AppModule {}
