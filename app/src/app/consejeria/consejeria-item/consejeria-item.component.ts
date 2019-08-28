import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Consejeria} from '../../models/consejeria.model';
import { ListItem } from '../../models/list-item.model';

@Component({
  selector: 'app-consejeria-item',
  templateUrl: './consejeria-item.component.html',
  styleUrls: ['./consejeria-item.component.scss']
})
export class ConsejeriaItemComponent implements OnInit {

  //consejeria a mostrar, es una entrada.
  @Input() consejeria : Consejeria;
  @Input() seleccionado : false;
  @Output() seleccionar = new EventEmitter <Consejeria>();

  //seleccionado: false;
  // x = 0;
  // y = 0;

  constructor() { }

  ngOnInit() {
    //this.consejeria = new Consejeria(1, "juana", "perez", new ListItem(1, ""), true, new ListItem(1, "") );

  }

  flipSeleccion(){
    /*mando el evento para el padre.*/
    this.seleccionar.emit(this.consejeria);
  }

  // mouse(evento: MouseEvent){
  //   this.x = evento.clientX;
  //   this.y = evento.clientY;
  // }
}
