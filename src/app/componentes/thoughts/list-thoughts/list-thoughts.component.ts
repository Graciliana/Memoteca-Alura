import { Component } from '@angular/core';
import { Pensamento } from '../thoughts';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent {
  listaPensamentos: Pensamento[] = [

  ];
}
