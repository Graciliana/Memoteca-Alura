import { Component } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent {
  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente Pai',
      modelo: 'modelo2',
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input ()',
      autoria: 'Componente Filho',
      modelo: 'modelo1',
    },
    {
      conteudo:
        'Angular é um framework de desenvolvimento web criado pela Google que permite a criação de aplicações web escaláveis e dinâmicas. Ele é baseado em TypeScript e é uma das ferramentas mais populares para desenvolvimento front-end. Já o Spring Boot é um framework Java que permite a criação de aplicações web robustas e escaláveis. Ele é baseado em Spring Framework e é uma das ferramentas mais populares para desenvolvimento back-end. Juntos, Angular e Spring Boot permitem a criação de aplicações web completas e escaláveis. O Angular é responsável pela criação da interface do usuário, enquanto o Spring Boot é responsável pelo processamento dos dados e pela comunicação com o banco de dados.',
      autoria: 'Angular e Java spring',
      modelo: 'modelo2',
    },
    {
      conteudo:
        'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft que é uma extensão do JavaScript. Ela adiciona recursos avançados ao JavaScript, como a tipagem estática e interfaces, tornando mais fácil detectar e prevenir erros durante a fase de desenvolvimento',
      autoria: 'TypeScript JavaScript',
      modelo: 'modelo1',
    },
  ];
}
