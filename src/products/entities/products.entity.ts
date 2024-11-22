import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Decorator que marca essa classe como uma entidade do TypeORM
export class Product {
  @PrimaryGeneratedColumn() // Define a coluna 'id' como chave primária auto incrementada
  id: number;

  @Column() // Define 'name' como uma coluna
  name: string;

  @Column('decimal') // Define 'price' como uma coluna do tipo decimal
  price: number;

  @Column({ nullable: true }) // Define 'description' como uma coluna opcional
  description?: string;

  @Column({ default: true }) // Define 'available' como uma coluna com valor padrão true
  available: boolean;
}
