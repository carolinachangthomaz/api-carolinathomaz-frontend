import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rastreador',
  templateUrl: './rastreador.component.html',
  styleUrls: ['./rastreador.component.css']
})
export class RastreadorComponent implements OnInit {

  movimentacoes: Array<any>;
  
  constructor() { }

  ngOnInit() {
  }

}
