import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './entities/products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // Registra a entidade Product
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
