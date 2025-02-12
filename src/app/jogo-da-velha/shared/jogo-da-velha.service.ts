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
  private numMovimentos: number = 0;
  private vitoria: any;

  private _jogador: number = 0;
  private _showInicio: boolean = false;
  private _showTabuleiro: boolean = false;
  private _showfinal: boolean = false;

  ngOnInit(): void {}

  constructor() {}

  inicializar(): void{

    this._showInicio = true;
    this._showTabuleiro = false;
    this._showfinal = false;
    this.numMovimentos = 0;
    this._jogador = this.X;
    this.vitoria = false;
    this.inicializarTabuleiro();

  }

  inicializarTabuleiro():void {
    this.tabuleiro = [this.TAM_TABULEIRO];
    for(let i = 0; i < this.TAM_TABULEIRO;i++){
      this.tabuleiro[i] = [this.VAZIO, this.VAZIO, this.VAZIO];
    }
    console.log(this.tabuleiro);
  }

  get showInicio(): boolean{
    return this._showInicio;
  }
 
  get showFinal(): boolean{
    return this._showfinal;
  }

  get jogador(): number{
    return this._jogador;
  }

  get showTabuleiro(){
    return this._showTabuleiro;

  }
 novoJogo(): void{
    this.inicializar();
    this._showfinal = false;
    this._showInicio = false;
    this._showTabuleiro = true;
  }
  
  iniciarJogo(): void{
    this._showInicio = false;
    this._showTabuleiro = true;
  }

  finalisarJogo(posX: number, posY: number, tabuleiro: any, _jogador: number): any{
   let fim: any = false;

    if(tabuleiro[posX][0] === this._jogador //verifica linha
      && tabuleiro[posX][1] === this._jogador 
      && tabuleiro[posX][2] === _jogador){
        fim = [[posX,0],[posX,1],[posX,2]];
    }

    if(tabuleiro[0][posY] === _jogador //verifica coluna
      && tabuleiro[1][posY] === _jogador
      && tabuleiro[2][posY] === _jogador){
        fim = [[0,posY],[1,posY],[2,[posY]]];      
    }

    if(tabuleiro[0][0] === _jogador//diagonal(0)
      && tabuleiro[1][1] === _jogador
      && tabuleiro[2][2] === _jogador){
        fim = [[0,0],[1,1],[2,2]]
    }

    if(tabuleiro[0][2] === _jogador //diagonal(1)
      && tabuleiro[1][1] === _jogador
      && tabuleiro[2][0] === _jogador){
        fim = [[0,2],[1,1],[2,0]];
      }
    
    return fim;
  }

  jogar(posX: number, posY: number ): void {
    if(this.tabuleiro[posX][posY]!==this.VAZIO || this.vitoria){
      return;
    }
    
    this.tabuleiro[posX][posY] = this._jogador;
    this.numMovimentos++;
    this.vitoria = this.finalisarJogo(posX, posY, this.tabuleiro, this._jogador);
    this._jogador = (this._jogador===this.X) ? this.O : this.X;

    if(!this.vitoria && this.numMovimentos < 9){//passa a vez
      this.cpuJogar();
    }

    if(this.vitoria!==false){ //vitoria
      this._showfinal = true;
    }

    if(!this.vitoria && this.numMovimentos === 9){//empate
      this._jogador = 0;
      this._showfinal = true;
    }
    
  }
  cpuJogar(): void{

    let jogada: number[] = this.obterJogada(this.O);
  
    if(jogada.length<=0){
      jogada = this.obterJogada(this.X);
    }

    if(jogada.length <= 0){
     
      let jogadas: any = [];
      for(let i = 0; i < this.TAM_TABULEIRO; i++){
        for(let j = 0; j < this.TAM_TABULEIRO; j++){
          if(this.tabuleiro[i][j]===this.VAZIO){
            jogadas.push([i,j]);
          }
        }
      }
    let k = Math.floor((Math.random() * (jogadas.length - 1)));
    jogada = [jogadas[k][0],jogadas[k][1]];
    }
    this.tabuleiro[jogada[0]][jogada[1]] = this._jogador;
    this.numMovimentos++;
    this.vitoria = this.finalisarJogo(jogada[0],jogada[1], this.tabuleiro, this.jogador);
    this._jogador = (this._jogador === this.X) ? this.O : this.X; 

    
  }

  obterJogada(_jogador: number): number[]{
    let tab = this.tabuleiro;
    for(let i = 0; i < this.TAM_TABULEIRO; i++){
      for(let j = 0; j < this.TAM_TABULEIRO; j++){
        if(tab[i][j] !== this.VAZIO){
          continue;         
        }
        tab[i][j] = _jogador;

        if (this.finalisarJogo(i, j, tab, _jogador)) {
          return [i, j];
        }
        tab[i][j] = this.VAZIO;
      }
    }
    return [];
  }

  exibirX(posX: number, posY: number): boolean {
   // console.log("Jogador X está agora na vez.");
    return this.tabuleiro[posX][posY] === this.X;
  }
  exibirO(posX: number, posY: number): boolean {
   // console.log("Jogador O está agora na vez.");
    return this.tabuleiro[posX][posY] === this.O;
  }
  exibirVitoria(posX: number, posY: number): boolean {
    let mostraVitoria: boolean = false;
    if(!this.vitoria) {
      return mostraVitoria;     
    } 
    for(let pos of this.vitoria){
      if(pos[0] === posX && pos[1] === posY) {
        mostraVitoria = true;
        break;
      }
    }
    return mostraVitoria;
  }
  
}

