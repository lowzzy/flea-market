import {
  Param,
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { Item } from '../entities/item.entity';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id') // /items/id (:idとすることで可変だと認識される)
  findById(@Param('id', ParseUUIDPipe) id: string): Item {
    return this.itemsService.findById(id);
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemsService.create(createItemDto);
  }
  @Patch(':id')
  updateStatus(@Param('id', ParseUUIDPipe) id: string): Item {
    return this.itemsService.updateStatus(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string): void {
    this.itemsService.delete(id);
  }
}
