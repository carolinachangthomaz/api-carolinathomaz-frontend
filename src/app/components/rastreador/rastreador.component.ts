import { RastreadorService } from './../../services/rastreador.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rastreador',
  templateUrl: './rastreador.component.html',
  styleUrls: ['./rastreador.component.css']
})
export class RastreadorComponent implements OnInit {

  venda: {id: ''};
  movimentacoes: Array<any>;

  constructor(private rastreadorService : RastreadorService) { }

  ngOnInit() {
    
  }

  findById(id: string){
  this.rastreadorService.findById(id).subscribe(
    (response)  => this.movimentacoes = response
    );
  }

  pesquisar(id : string){
     this.findById(id);
  }

  
}
