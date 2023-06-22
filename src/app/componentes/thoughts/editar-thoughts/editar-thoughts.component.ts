import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../thoughts';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-thoughts',
  templateUrl: './editar-thoughts.component.html',
  styleUrls: ['./editar-thoughts.component.css'],
})
export class EditarThoughtsComponent implements OnInit {
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

  editarPensamento() {
    this.service.editar(this.pensamento).subscribe(() => {
       this.router.navigate(['/listThought']);
    });
  }
  cancelar() {
    this.router.navigate(['/listThought']);
  }
}

