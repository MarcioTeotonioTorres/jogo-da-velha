import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './shared';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, JogoDaVelhaComponent
  ],
  exports: [JogoDaVelhaComponent],
  providers: [JogoDaVelhaService ]
})
export class JogoDaVelhaModule { }
