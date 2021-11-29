import { Component } from '@angular/core';
import { UsuarioServicio } from './servicios/UsuarioService';
import { Usuario } from './modelos/Usuario';
import { MercanciaServicio } from './servicios/MercanciaService';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';


  public  usuarios:Usuario[]=[]

   constructor(private uServicio:UsuarioServicio,private mercanciaServicio: MercanciaServicio){
 
console.log(this.uServicio.getUsuarios())
this.uServicio.getUsuarios().subscribe(data=>{
  this.usuarios=data
  console.log(this.usuarios[0].nombre)
 
})
  }

  getUsuarios():void{
  
 
    
  }

  getMercancia(id:number):void{
this.mercanciaServicio.getMercancia(id).subscribe(data=>{
  console.log(data)
})
  }

  consultar($event:any):void{
    console.log($event)
  }




  

}
