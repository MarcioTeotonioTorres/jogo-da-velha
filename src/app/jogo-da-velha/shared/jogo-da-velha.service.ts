import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogoDaVelhaService implements OnInit{

  private readonly TAM_TABULEIRO: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly VAZIO: number = 0;

  private tabuleiro: any;
  private numMovimentos: number = 0


  ngOnInit(): void {
    
  }

  constructor() { }
}
