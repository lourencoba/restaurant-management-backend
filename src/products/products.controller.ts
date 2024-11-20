import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): Product[] {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Product {
    return this.productsService.findOne(+id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): void {
    console.log("PRODUTO CONTROLLER:", createProductDto);
    this.productsService.create(createProductDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatedProduct: Partial<Product>): Product {
    return this.productsService.update(+id, updatedProduct);
  }

  @Delete(':id')
  delete(@Param('id') id: string): boolean {
    return this.productsService.delete(+id);
  }
}
