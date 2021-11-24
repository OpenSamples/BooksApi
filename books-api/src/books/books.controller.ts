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
  addNewBook(@Body() createBookDto: CreateBookDto): string {
    return `Title: ${createBookDto.title}, Author: ${createBookDto.author}, 
            Written in: ${createBookDto.year}, Number of Pages: ${createBookDto.pages}`;
  }

  @Delete(':id')
  deleteBook(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  updateBook(@Body() updateBookDto: CreateBookDto, @Param('id') id): string {
    return `Update ${id}, Title: ${updateBookDto.title}`;
  }
}
