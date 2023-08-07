import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '172.17.112.1',
      port: 1433,
      username: 'sa',
      password: 'nome_1234',
      database: 'mssqldb',
      entities: [],
      synchronize: true,
      options: { trustServerCertificate: true },
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
