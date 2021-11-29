import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Usuario } from "../modelos/Usuario";
import { Observable } from "rxjs";
import { Mercancia } from "../modelos/mercancia";
@Injectable({
    providedIn:'root'
})   
export  class MercanciaServicio {

 
    constructor(private http: HttpClient){
    
   
    }

    public getMercancia(id:number):Observable<Mercancia[]>{
   return   this.http.get<Mercancia[]>(`http://localhost:8080/api/mercancia/listarmercanciaporusuario?id=${id}`)
        
        
         
    } 
}