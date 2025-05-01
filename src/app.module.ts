// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './modules/products/products.module';
import { Product } from './modules/products/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: process.env.DATABASE_URL,
      entities: [Product],
      synchronize: true,
    }),
    ProductsModule,
  ],
})
export class AppModule {}