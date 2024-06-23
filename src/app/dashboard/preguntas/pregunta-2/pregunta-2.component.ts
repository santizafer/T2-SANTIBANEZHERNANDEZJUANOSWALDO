import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';

@Component({
  selector: 'app-pregunta-2',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta-2.component.html',
  styleUrl: './pregunta-2.component.css'
})
export class Pregunta2Component {

  utilidades = ""

  calcular(salario: HTMLInputElement, anios: HTMLInputElement):void{

    var salario_ = Number(salario.value)
    var anios_ = Number(anios.value)
    var salarioTotal = 0


    if(anios_ < 1) {
      salarioTotal = salario_ * 0.05
    } else if (anios_ >= 1 && anios_ < 2 ) {
      salarioTotal = salario_ * 0.07
    } else if (anios_ >= 2 && anios_ < 5 ) {
      salarioTotal = salario_ * 0.07
    } else if (anios_ >= 5 && anios_ < 10 ) {
      salarioTotal = salario_ * 0.15
    } else {
      salarioTotal = salario_ * 0.20
    }

    this.utilidades = `utilidades es igual a ${salarioTotal}`


  }


}
