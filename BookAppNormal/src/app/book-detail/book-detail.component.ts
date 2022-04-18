import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../books';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html'
})
export class BookDetailComponent implements OnInit {
  book: Book = null;
  isbn: string = null;

  constructor(private route: ActivatedRoute, private http: HttpClient, private meta: Meta, @Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit(): void {
    this.isbn = this.route.snapshot.paramMap.get('bookId');
    this.getBook(this.route.snapshot.paramMap.get('bookId'));
  }

  getBook(isbn?: string) {
    if (!isbn) {
      return;
    }

    this.http.get('https://openlibrary.org/api/books?bibkeys=ISBN:' + isbn + '&jscmd=data&format=json')
      .subscribe((data: any) => {
        this.book = data['ISBN:' + isbn];

        // these meta tags does not do anything, only meta tags at page load matter
        // these are search engine tags
        this.meta.addTag({ name: 'title', content: this.book.title });
        this.meta.addTag({ name: 'description', content: this.book.title });

        // these are social media open graph tags
        this.meta.addTag({ name: 'og:title', content: this.book.title });
        this.meta.addTag({ name: 'og:description', content: this.book.title });
        this.meta.addTag({ name: 'og:image', content: this.book.cover.small });
        this.meta.addTag({ name: 'og:image:alt', content: this.book.title });

        // ... there are many other tags, best is to look at what popular site uses
      });
  }

  clickedTestButton() {
    console.log('Clicked test button');
  }
}
