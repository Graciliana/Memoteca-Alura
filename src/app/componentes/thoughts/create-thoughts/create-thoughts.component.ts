import { Component } from '@angular/core';
import { Pensamento } from '../thoughts';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css'],
})
export class CreateThoughtsComponent {
  pensamento:Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  criarPensamento() {
    alert('Novo pensamento criado!');
  }
  cancelar() {
    alert('Cancelado');
  }
}
