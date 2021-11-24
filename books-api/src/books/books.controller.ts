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

@Controller('books')
export class BooksController {
  @Get()
  findAllBooks(): string {
    return 'Get all books!';
  }

  @Get(':id')
  findOneBook(@Param('id') id): string {
    return `Book ${id}`;
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
