import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
const settings = require('../ormconfig.js');

@Module({
  imports: [ItemsModule, TypeOrmModule.forRoot(settings)],
  controllers: [],
  providers: [],
})
export class AppModule {}
