import { Component, OnInit } from '@angular/core';
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

  constructor(private route: ActivatedRoute, private meta: Meta) { }

  ngOnInit(): void {
    console.log('ngOnInit');
    
    const bookData = this.route.snapshot.data['book']; // api is already called in book.resolver, this is the api respopnse
    this.book = bookData['ISBN:' + this.route.snapshot.paramMap.get('bookId')];
    this.isbn = this.route.snapshot.paramMap.get('bookId');

    // these are search engine tags
    this.meta.addTag({ name: 'title', content: this.book.title });
    this.meta.addTag({ name: 'description', content: this.book.title });

    // these are social media open graph tags
    this.meta.addTag({ name: 'og:title', content: this.book.title });
    this.meta.addTag({ name: 'og:description', content: this.book.title });
    this.meta.addTag({ name: 'og:image', content: this.book.cover.small });
    this.meta.addTag({ name: 'og:image:alt', content: this.book.title });

    // ... there are many other tags, best is to look at what popular site uses
  }

  // This button is not interactable in server mode and only interactable in client mode
  clickedTestButton() {
    console.log('Clicked test button');
  }

  // These lifecycle hooks are all called once in SSR mode and once in client mode (browser)

  // ngOnInit() {
  //   if (isPlatformServer(this.platformId)) {
  //     // server mode
  //     console.log('this gets called in server');
  //   } else {
  //     // client mode
  //     console.log('this gets called in browser');
  //   }
  // }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit');
  // }

  // ngAfterViewInit()	{
  //   console.log('ngAfterViewInit');
  // }

  // ngOnDestroy()	{
  //   console.log('ngOnDestroy');
  // }

}
