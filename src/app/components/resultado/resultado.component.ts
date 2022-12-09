import { Component } from '@angular/core';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

    imc:number
    resultado: string;
    interpretacion: string;
    constructor(private route: ActivatedRoute){
      this.resultado= '';
      this.interpretacion= '';
      this.imc = +route.snapshot.paramMap.get('valorD')!;
      console.log(this.imc)
    }


ngOnInit(): void{
  this.getResultado();
}

getResultado(){
  if(this.imc > 25){
    this.resultado = 'Exceso de peso';
    this.interpretacion = 'Tienes un peso corporal superior al normal, Intente hacer mas EJERCICIO!!'
  } else if(this.imc >= 18.5){
    this.resultado= 'Normal';
    this.interpretacion= 'Tienes un peso corporal normal, ¡Buen trabajo!'
  }else {
    this.resultado = 'Bajo peso ';
    this.interpretacion = 'Tienes un peso corporal mas bajo de lo normal. Deberias comer mas'
  }

}


}
