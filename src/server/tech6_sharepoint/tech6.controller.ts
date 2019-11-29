import { Get, Post, Controller, Body, Param } from '@nestjs/common';
import { Tech6Service } from './tech6.service';
import { Tech6UserInfo } from './tech6.userInfo';
import { get } from 'http';

@Controller('tech6')
export class Tech6Controller {

    constructor(private readonly tech6Service: Tech6Service) { }

    @Get()
    async getAllItemsJsonString(@Body() userInfo: Tech6UserInfo): Promise<object> {
        // return ['Pizza', 'Coke'];
        return this.tech6Service.getAllItemsJsonString(userInfo);
    }

    @Get('testing')
    async getAllItemsJsonStringWithoutParam(): Promise<object> {

        // tslint:disable-next-line:prefer-const
        let userInfo = new Tech6UserInfo();
        userInfo.userName = 'tngo25@dxc.com';
        userInfo.pwd = 'Susaigon123!@#';
        userInfo.siteURL = 'https://dxcportal.sharepoint.com/sites/tech6';

        return this.tech6Service.getAllItemsJsonString(userInfo);
    }

    @Get('/testing/:id')
    async findOne(@Param('id') id): Promise<object> {
        let userInfo = new Tech6UserInfo();
        userInfo.userName = 'tngo25@dxc.com';
        userInfo.pwd = 'Susaigon123!@#';
        userInfo.siteURL = 'https://dxcportal.sharepoint.com/sites/tech6';

        return this.tech6Service.getItemDetailById(userInfo,id);
    }

}
