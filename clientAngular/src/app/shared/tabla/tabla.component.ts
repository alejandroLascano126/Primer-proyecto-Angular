import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  imports: [],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  datos: any[] = [
    { columna1: "Alejandro", columna2: "Lascano", columna3: "Ecuador" },
    { columna1: "Erick", columna2: "Soria", columna3: "Estados Unidos" },
    { columna1: "Josue", columna2: "Macias", columna3: "China" },
    { columna1: "Ricardo", columna2: "Chavez", columna3: "Canada" }
  ];




  trackByFn(index: number, item: any): any {
    return item.columna1 + item.columna2 + item.columna3;
  }


}
