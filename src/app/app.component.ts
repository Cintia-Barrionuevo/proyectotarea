import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



 export class AppComponent {
  title = 'proyectotarea';


  tablaProductos = [
    {nombre:'Lapicera',costo:'150'},
    {nombre:'Cartuchera',costo:'1500'},
    {nombre:'Temperas',costo:'500'},
    {nombre:'Pincel',costo:'100'},
  ];

  mostrarLista: boolean = true;
  ocultarLista() {
    this.mostrarLista = !this.mostrarLista;
  }
  


}
