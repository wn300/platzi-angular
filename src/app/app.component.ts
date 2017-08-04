import { Component } from '@angular/core';
import { InputOutputComponent } from './input-output/input-output.component';
import { TicketService } from './services/ticket.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Platzi';
  votacion = '';
  tickets: any;

  constructor(private ticketService: TicketService) {
    this.tickets = ticketService.getTicket();
  }

  votos = [
    { title: 'opcion 1' },
    { title: 'opcion 2' },
    { title: 'opcion 3' },
    { title: 'opcion 4' }
  ]

  addVoto(response: string) {
    this.votacion = "usted eligio: " + response;
  }

  cantidad = 5;
  factor = 1;

  resultado ="";

  onSubmit(form: any): void {
    this.resultado = JSON.stringify(form);
    // console.log("El formulario tiene", form);
  }
}
