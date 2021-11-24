import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  @Get()
  findAllBooks(): string {
    return 'Get all books!';
  }

  @Post()
  addNewBook(@Body() createBookDto: CreateBookDto): string {
    return `Title: ${createBookDto.title}, Author: ${createBookDto.author}, 
            Written in: ${createBookDto.year}, Number of Pages: ${createBookDto.pages}`;
  }
}
