import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import  { JogoDaVelhaComponent } from './jogo-da-velha';


@Component({
  selector: 'app-root',
  imports: [JogoDaVelhaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
