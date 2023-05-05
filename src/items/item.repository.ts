import { Item } from '../entities/item.entity';
import { EntityRepository, Repository } from 'typeorm';
import { ItemStatus } from './item-status.enum';
import { CreateItemDto } from './dto/create-item.dto';

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
  async createItem(createItemDto: CreateItemDto): Promise<Item> {
    const { name, price, description } = createItemDto;
    const item = this.create({
      name,
      price,
      description,
      status: ItemStatus.ON_SALE,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    await this.save(item);

    return item;
  }
}
