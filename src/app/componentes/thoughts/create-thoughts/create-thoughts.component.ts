import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../thoughts';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css'],
})
export class CreateThoughtsComponent implements OnInit {
  pensamento: Pensamento = {
    id:0,
    conteudo: '',
    autoria: '',
    modelo: 'modelo2',
  };
  constructor(
    private service: ThoughtService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listThought'])
    })
  }

  cancelar() {
    this.router.navigate(['/listThought'])
  }
}
