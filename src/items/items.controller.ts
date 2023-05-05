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
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id') // /items/id (:idとすることで可変だと認識される)
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Item> {
    return this.itemsService.findById(id);
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemsService.create(createItemDto);
  }
  @Patch(':id')
  async updateStatus(@Param('id', ParseUUIDPipe) id: string): Promise<Item> {
    return await this.itemsService.updateStatus(id);
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    await this.itemsService.delete(id);
  }
}
