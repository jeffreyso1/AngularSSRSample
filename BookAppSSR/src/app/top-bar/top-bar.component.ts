import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  pageState: string;

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.pageState = 'Client Mode';
    } else {
      this.pageState = 'SSR Mode';
    }
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/