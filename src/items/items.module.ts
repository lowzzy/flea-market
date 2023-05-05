import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Item } from 'src/entities/item.entity'; // Itemをインポート
import { ItemRepository } from './item.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ItemRepository])], // Itemを追加
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
