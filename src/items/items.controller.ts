import { Get, Post, Controller, Body } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.interface';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemService: ItemsService) { }

    @Get()
    async findAll(): Promise<Item[]> {
        // return ['Pizza', 'Coke'];
        return this.itemService.finAll();
    }

    @Post()
    async create(@Body() item: Item) {
        // return 'Not yet implemented';
        this.itemService.create(item);
    }
}
