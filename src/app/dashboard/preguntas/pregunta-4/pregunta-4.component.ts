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
    var mensaje = "sobrepasa el limite total de alcohol "

    if(tipo_vehiculo == "Camión" && valor_alcohol > 0.3) {
      resultadoTotal = mensaje + tipo_vehiculo
    } else if (tipo_vehiculo == "Autobús" && valor_alcohol > 0.3) {
      resultadoTotal = mensaje + tipo_vehiculo
    } else if (tipo_vehiculo == "Turismo" && valor_alcohol > 0.5) {
       resultadoTotal = mensaje + tipo_vehiculo
    }  else if (tipo_vehiculo == "Motocicleta" && valor_alcohol > 0.3) {
      resultadoTotal = mensaje + tipo_vehiculo
    } else {
      resultadoTotal = "Valor o vehículo no encotrado"
    }

    this.resultadoalcohol = resultadoTotal


  }


}
