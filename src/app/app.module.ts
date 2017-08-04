import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//input and output
import { InputOutputComponent } from './input-output/input-output.component';

//pipes
import { ConversorPipe } from './pipes/conversor.pipe';

//directives
import { GigantDirective } from './directives/gigant.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { TitleDirective } from './directives/title.directive';

//services
import { TicketService } from './services/ticket.service';


@NgModule({
  declarations: [
    AppComponent,
    InputOutputComponent,
    ConversorPipe,
    GigantDirective,
    HighlightDirective,
    TitleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
