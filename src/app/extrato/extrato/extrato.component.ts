import { TransferenciaService } from './../../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: any[] = []

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    // Valor que existe no get de transferencias eh atribuido para o array local de transferencias
    this.transferencias = this.service.transferencias
  }

}
