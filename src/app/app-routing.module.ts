import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtsComponent } from './componentes/thoughts/create-thoughts/create-thoughts.component';
import { ListThoughtsComponent } from './componentes/thoughts/list-thoughts/list-thoughts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'listThought',
    pathMatch: 'full',
  },
  {
    path: 'createThought',
    component: CreateThoughtsComponent,
  },
  {
    path: 'listThought',
    component: ListThoughtsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
