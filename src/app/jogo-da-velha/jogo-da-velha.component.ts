import { Component, Inject, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jogo-da-velha',
  imports: [FormsModule,CommonModule],
  templateUrl: './jogo-da-velha.component.html',
  styleUrl: './jogo-da-velha.component.css'
})
export class JogoDaVelhaComponent implements OnInit{

  constructor(private service: JogoDaVelhaService){}
  
ngOnInit(): void {
  this.service.inicializar();
  }
get showInicio(){
  return this.service.showInicio;
  }
get showFinal(){
  return this.service.showFinal;
  }

get showTabuleiro(){
  return this.service.showTabuleiro;
  }
get jogador(): number{
  return this.service.jogador;
  }

iniciarJogo(): void{
 this.service.iniciarJogo();
  }

jogar(posX: number,posY: number): void{
  this.service.jogar(posX, posY);
  }

exibirX(posX: number, posY: number): boolean{
  return this.service.exibirX(posX,posY);
  }

exibir0(posX: number,posY: number): boolean{
  return this.service.exibirO(posX,posY);
  }

exibirVitoria(posX:number,posY:number): boolean{
  return this.service.exibirVitoria(posX,posY);
  }
novoJogo():void{
  this.service.novoJogo();
  }

}
