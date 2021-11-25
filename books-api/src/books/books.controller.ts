import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { BooksService } from './books.service';
import { Book } from './contracts/book.interface';

@Controller('books')
export class BooksController {
  // injecting dependency in the constructor
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAllBooks(): Promise<Book[]> {
    return this.booksService.findAllBooks();
  }

  @Get(':id')
  findOneBook(@Param('id') id): Promise<Book> {
    return this.booksService.findOneBook(id);
  }

  @Post()
  addNewBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.addNewBook(createBookDto);
  }

  @Delete(':id')
  deleteBook(@Param('id') id): Promise<Book> {
    return this.booksService.deleteBook(id);
  }

  @Put(':id')
  updateBook(@Param('id') id, @Body() updateBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.updateBook(id, updateBookDto);
  }
}
