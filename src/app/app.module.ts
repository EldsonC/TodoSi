import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosiComponent } from './modules/todosi/todosi.component';
import { CardsListComponent } from './shared/components/cards-list/cards-list.component';
import { SheetCardComponent } from './shared/components/sheet-card/sheet-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodosiComponent,
    CardsListComponent,
    SheetCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
