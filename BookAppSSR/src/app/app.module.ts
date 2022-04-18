import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { AppShellNoRenderDirective, AppShellRenderDirective } from './directives';
import { BookResolver } from './resolver/book.resolver';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: ':bookId', component: BookDetailComponent, resolve: { book: BookResolver } },
    ], {
      initialNavigation: 'enabledBlocking'
    })
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    BookDetailComponent,
    AppShellRenderDirective,
    AppShellNoRenderDirective
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    BookResolver
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/