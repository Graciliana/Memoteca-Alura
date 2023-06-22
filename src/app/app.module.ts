import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';

import { FormsModule } from '@angular/forms';
import { ListThoughtsComponent } from './componentes/thoughts/list-thoughts/list-thoughts.component';
import { ThoughtsComponent } from './componentes/thoughts/thoughts/thoughts.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateThoughtsComponent } from './componentes/thoughts/create-thoughts/create-thoughts.component';
import { DeleteThoughtsComponent } from './componentes/thoughts/delete-thoughts/delete-thoughts.component';
import { EditarThoughtsComponent } from './componentes/thoughts/editar-thoughts/editar-thoughts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtsComponent,
    ListThoughtsComponent,
    ThoughtsComponent,
    DeleteThoughtsComponent,
    EditarThoughtsComponent


  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
