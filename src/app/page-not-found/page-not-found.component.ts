import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="mat-subheading-2">Page Not Found</div>
  `,
  styles: [
    `div {
      margin: 2rem;
    }`
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
