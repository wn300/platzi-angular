import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'input-output-component',
    templateUrl: 'input-output.component.html',
    styleUrls: ['input-output.component.css'],
})
export class InputOutputComponent{
    @Input() voto:string;

    @Output() addVoto = new EventEmitter<string>();

    constructor(){
        console.log("estoy entrando");
    }

    votar():void{
        this.addVoto.emit(this.voto);
    }
}
