import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('test logging');
    return 'Hello Test API mssql database';
  }
}
