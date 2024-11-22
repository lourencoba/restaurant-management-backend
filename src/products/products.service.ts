import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) // Injeta o repositório do TypeORM
    private readonly productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find(); // Retorna todos os produtos do banco
  }

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOneBy({ id }); // Retorna o produto pelo ID
  }

  create(product: Partial<Product>): Promise<Product> {
    const newProduct = this.productRepository.create(product); // Cria uma instância
    return this.productRepository.save(newProduct); // Salva no banco de dados
  }

  async update(id: number, updatedProduct: Partial<Product>): Promise<Product> {
    await this.productRepository.update(id, updatedProduct); // Atualiza o registro no banco
    return this.findOne(id); // Retorna o produto atualizado
  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id); // Remove o produto pelo ID
  }
}
