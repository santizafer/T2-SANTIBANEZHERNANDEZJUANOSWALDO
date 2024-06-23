import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';

@Component({
  selector: 'app-pregunta-3',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta-3.component.html',
  styleUrl: './pregunta-3.component.css'
})
export class Pregunta3Component {

  costototal = ""

  calcular(materias: HTMLInputElement):void{

    var n_materias = Number(materias.value)
    var precio = 520
    var costo_total = 0


    if(n_materias <= 5) {
      costo_total = n_materias * precio
    } else {
      costo_total = (n_materias * precio) - ((n_materias * precio) * 0.1)
    }
    this.costototal = `costo total de las materias es : ${costo_total}`


  }

}
