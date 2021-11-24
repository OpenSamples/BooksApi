import { Injectable } from '@nestjs/common';
import { Book } from './contracts/book.interface';

@Injectable()
export class BooksService {
    private readonly books: Book[] = [
        {
            id: "121212121221",
            title: "Book 1",
            author: "Author 1",
            year: 1999,
            pages: 380
        },
        {
            id: "3232323232323",
            title: "Book 2",
            author: "Author 2",
            year: 2001,
            pages: 200
        },
        {
            id: "3434343434343",
            title: "Book 3",
            author: "Author 3",
            year: 1955,
            pages: 400
        }
    ];

    findAllBooks(): Book[] {
        return this.books;
    }
}
