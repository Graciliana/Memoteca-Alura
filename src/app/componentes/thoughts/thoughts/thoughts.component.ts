import { Component } from '@angular/core';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.css']
})
export class ThoughtsComponent {
    pensamento = {
        conteudo: 'I love Angular',
        autoria: 'Nay',
        modelo: 'modelo3'
    }
}
