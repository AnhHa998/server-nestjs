import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ItemsController } from './items/items.controller';
import { AppService } from './app.service';
import { from } from 'rxjs';
import { ItemsService } from './items/items.service';
import { Tech6Controller } from './server/tech6_sharepoint/tech6.controller';
import { Tech6Service } from './server/tech6_sharepoint/tech6.service';

@Module({
  imports: [],
  controllers: [ItemsController, Tech6Controller],  // AppController
  providers: [ItemsService, Tech6Service], // AppService
})

export class AppModule {}
