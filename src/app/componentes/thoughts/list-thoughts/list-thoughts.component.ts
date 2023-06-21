import { Component } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent {
  listaPensamentos = [
    // {
    //   conteudo: 'Passo informações para o componente filho',
    //   autoria: 'Componente Pai',
    //   modelo: 'modelo2',
    // },
    // {
    //   conteudo: 'Minha propriedade é decorada com @Input ()',
    //   autoria: 'Componente Filho',
    //   modelo: 'modelo1',
    // },
  ];
}
