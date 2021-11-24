import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config';

@Module({
  imports: [BooksModule, MongooseModule.forRoot(config.dbConnection)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
