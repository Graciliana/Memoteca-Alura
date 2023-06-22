import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../thoughts';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-delete-thoughts',
  templateUrl: './delete-thoughts.component.html',
  styleUrls: ['./delete-thoughts.component.css'],
})
export class DeleteThoughtsComponent implements OnInit {
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listThought']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listThought']);
  }
}
