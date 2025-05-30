import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  titulo: string = "Contact"

  medios:any[] = [
    {"texto":"Follow on X"},
    {"texto":"Like on Facebook"},
    {"texto":"Email me"}
  ]
}
