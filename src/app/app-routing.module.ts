import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtsComponent } from './componentes/thoughts/create-thoughts/create-thoughts.component';
import { ListThoughtsComponent } from './componentes/thoughts/list-thoughts/list-thoughts.component';
import { DeleteThoughtsComponent } from './componentes/thoughts/delete-thoughts/delete-thoughts.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'listThought',
    pathMatch: 'full',
  },
  {
    path: 'createThought',
    component: CreateThoughtsComponent,
  },
  {
    path: 'listThought',
    component: ListThoughtsComponent,
  },
  {
    path: 'thoughts/deleteThought/:id',
    component: DeleteThoughtsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
