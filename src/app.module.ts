import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';

// const settings = require('../ormconfig.js');

@Module({
  // imports: [ItemsModule, TypeOrmModule.forRoot(settings)],
  imports: [
    ItemsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      autoLoadEntities: true,
      entities: [Item],
      migrations: ['dist/migrations/*.js'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
