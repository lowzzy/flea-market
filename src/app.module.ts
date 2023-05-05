import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
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
      // autoLoadEntities: true,
      entities: ['../dist/entitiess/*.entity.js'],
      migrations: ['../dist/migrationsss/*.js'],
      cli: {
        entitiesDir: 'entities',
        migrationsDir: 'src/migrations',
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
