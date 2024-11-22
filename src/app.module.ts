import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../ormconfig';

@Module({
  imports: [
    ProductsModule, 
    CategoriesModule,
    ConfigModule.forRoot({
      isGlobal: true, // Permite que variáveis do .env sejam acessadas globalmente
    }),
    TypeOrmModule.forRoot(ormconfig), // TypeORM buscará automaticamente as configurações do ormconfig.js
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
