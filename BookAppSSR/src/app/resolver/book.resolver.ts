import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformServer} from '@angular/common';
import {makeStateKey, StateKey, TransferState} from '@angular/platform-browser';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { catchError, filter, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookResolver implements Resolve<any> {

  constructor(private http: HttpClient, private transferState: TransferState, @Inject(PLATFORM_ID) private platformId) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {

    const bookId = route.params['bookId'];
    const BOOK_KEY = makeStateKey<any>('book-' + bookId);
    console.log(BOOK_KEY);

    if (isPlatformServer(this.platformId)) {
      console.log('server load book');
      return this.getBook(BOOK_KEY, bookId);
    } else {
      if (this.transferState.hasKey(BOOK_KEY)) {
        console.log('client get book');
        const book = this.transferState.get<any>(BOOK_KEY, null);
        this.transferState.remove(BOOK_KEY);
        return of(book);
      } else {
        console.log('client load book');
        return this.getBook(BOOK_KEY, bookId);
      }
    }
  }

  getBook(key: StateKey<any>, isbn?: string) {
    if (!isbn) {
      return of();
    }

    return this.http.get('https://openlibrary.org/api/books?bibkeys=ISBN:' + isbn + '&jscmd=data&format=json')
      .pipe(
        catchError(err => of()),
        tap(book => {
          console.log('api called, response below');
          console.log(book);
          this.transferState.set(key, book);
        })
      );
  }
}