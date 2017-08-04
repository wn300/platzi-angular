import {Injectable} from '@angular/core'
import { TICKETS } from './mocks/tickets.mocks';

@Injectable()
export class TicketService{
    miVariableTicketglobarl = "soy una variable globar";

    getTicket(){
        return TICKETS;
    }

    getVariableGlobal(){
        return this.miVariableTicketglobarl;
    }
}