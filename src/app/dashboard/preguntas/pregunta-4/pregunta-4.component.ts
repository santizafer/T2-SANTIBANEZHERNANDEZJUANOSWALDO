import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';

@Component({
  selector: 'app-pregunta-4',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta-4.component.html',
  styleUrl: './pregunta-4.component.css'
})
export class Pregunta4Component {

  resultadoalcohol = ""

  calcular(tipo: HTMLInputElement, alcohol: HTMLInputElement):void{

    var tipo_vehiculo = tipo.value
    var valor_alcohol = Number(alcohol.value)
    var resultadoTotal = ""

    if(tipo_vehiculo == "Camión" && valor_alcohol > 0.3) {
      resultadoTotal = "sobrepasa el limite total de alcohol"
    } else if (tipo_vehiculo == "Autobús" && valor_alcohol > 0.3) {
      resultadoTotal = "sobrepasa el limite total de alcohol"
    } else if (tipo_vehiculo == "Turismo" && valor_alcohol > 0.5) {
       resultadoTotal = "sobrepasa el limite total de alcohol"
    }  else if (tipo_vehiculo == "Motocicleta" && valor_alcohol > 0.3) {
      resultadoTotal = "sobrepasa el limite total de alcohol"
    } else {
      resultadoTotal = "Control de alchool permitido"
    }

    this.resultadoalcohol = resultadoTotal


  }


}
