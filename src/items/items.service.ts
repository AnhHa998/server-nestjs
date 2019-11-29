import { Injectable } from '@nestjs/common';
import { Item } from './item.interface';

@Injectable()
export class ItemsService {

    private readonly items: Item[] = [];

    finAll(): Item[] {
        return this.items;
    }

    create(item: Item) {
        this.items.push(item);
    }
}
