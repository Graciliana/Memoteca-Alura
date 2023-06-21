import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';

import { CreateThoughtsComponent } from './componentes/thoughts/create-thoughts/create-thoughts.component';
import { FormsModule } from '@angular/forms';
import { ListThoughtsComponent } from './componentes/thoughts/list-thoughts/list-thoughts.component';
import { ThoughtsComponent } from './componentes/thoughts/thoughts/thoughts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtsComponent,
    ListThoughtsComponent,
    ThoughtsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
