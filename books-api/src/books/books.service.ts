import { Injectable } from '@nestjs/common';
import { Book } from './contracts/book.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async findAllBooks(): Promise<Book[]> {
    return await this.bookModel.find();
  }

  async findOneBook(id: string): Promise<Book> {
    return await this.bookModel.findOne({ _id: id});
  }
}
