
import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Usuario } from "../modelos/Usuario";
import { Observable } from "rxjs";
@Injectable({
    providedIn:'root'
})   
export  class UsuarioServicio {

 
    constructor(private http: HttpClient){
    
   
    }

    public getUsuarios():Observable<Usuario[]>{
   return   this.http.get<Usuario[]>("http://localhost:8080/api/usuario/obtenerusuarios")
        
        
         
    } 
}