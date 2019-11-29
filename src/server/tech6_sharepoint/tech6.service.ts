import { Injectable } from '@nestjs/common';
import { Tech6UserInfo } from './tech6.userInfo';
import { Tech6SPList } from '../common/tech6.splist';
import * as spauth from 'node-sp-auth';
import * as request from 'request-promise';

@Injectable()
export class Tech6Service {

    getAllItemsJsonString(userInfo: Tech6UserInfo): Promise<object[]> {
        return new Promise<object[]>((resolve, reject) => {
            spauth.getAuth(userInfo.siteURL, {
                username: userInfo.userName,
                // tslint:disable-next-line:trailing-comma
                password: userInfo.pwd
            })
                .then(options => {
                    // tslint:disable-next-line:prefer-const
                    let headers = options.headers;
                    // tslint:disable-next-line:no-string-literal
                    headers['Accept'] = 'application/json;odata=verbose';
                    request.get({
                        uri: userInfo.siteURL + '/_api/web/lists/getByTitle(\'Data_Storage\')/items',
                        // tslint:disable-next-line:object-literal-shorthand
                        headers: headers,
                        // tslint:disable-next-line:trailing-comma
                        json: true
                    }).then(response => {
                        // process data
                        const items = response.d.results;
                        // return resolve(items);

                        const tech6Items: object[] = [];
                        items.forEach(element => {
                            const tech6Item = {
                                Id: element.Id,
                                Region: element.Region,
                                Offering: element.Offering,
                                Tech_x0020_Area: element.Tech_x0020_Area,
                                Title: element.Title,
                                Detail: element.Detail,
                                Event_x0020_Date: element.Event_x0020_Date,
                                Contact_x0020_Point: element.Contact_x0020_Point,
                                // tslint:disable-next-line:trailing-comma
                                Technology: element.Technology
                            };
                            tech6Items.push(tech6Item);
                        });
                        return resolve(tech6Items);
                        // return resolve(JSON.stringify(items));

                    });
                });
        });
    }
    getItemDetailById(userInfo: Tech6UserInfo, _ItemId: number): Promise<object> {
        return new Promise<object>((resolve, reject) => {
            spauth.getAuth(userInfo.siteURL, {
                username: userInfo.userName,
                // tslint:disable-next-line:trailing-comma
                password: userInfo.pwd
            })
                .then(options => {
                    // tslint:disable-next-line:prefer-const
                    let headers = options.headers;
                    // tslint:disable-next-line:no-string-literal
                    headers['Accept'] = 'application/json;odata=verbose';
                    request.get({
                        uri: userInfo.siteURL + "/_api/web/lists/getByTitle(\'Data_Storage\')/items('" + _ItemId + "')",
                        // tslint:disable-next-line:object-literal-shorthand
                        headers: headers,
                        // tslint:disable-next-line:trailing-comma
                        json: true
                    }).then(response => {
                        // process data
                        const item = response.d;
                        //let tech6Item = {};

                        let tech6Item = {
                            Id: item.Id,
                            Region: item.Region,
                            Offering: item.Offering,
                            Tech_x0020_Area: item.Tech_x0020_Area,
                            Title: item.Title,
                            Detail: item.Detail,
                            Event_x0020_Date: item.Event_x0020_Date,
                            Contact_x0020_Point: item.Contact_x0020_Point,
                            // tslint:disable-next-line:trailing-comma
                            Technology: item.Technology
                        };
                        return resolve(tech6Item);
                    });
                });
        });
    }

}
