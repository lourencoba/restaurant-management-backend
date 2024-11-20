import { Injectable, Logger } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  private products: Product[] = []; // Simulando um banco de dados em memória

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    return this.products.find(product => product.id === id);
  }

  create(createProductDto: CreateProductDto): void {
    this.products.push({ ...createProductDto, id: this.products.length + 1 });
    return 
  }

  update(id: number, updatedProduct: Partial<Product>): Product {
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1) return null;

    this.products[index] = { ...this.products[index], ...updatedProduct };
    return this.products[index];
  }

  delete(id: number): boolean {
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1) return false;

    this.products.splice(index, 1);
    return true;
  }
}