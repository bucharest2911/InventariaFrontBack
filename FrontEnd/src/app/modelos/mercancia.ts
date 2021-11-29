import { Usuario } from "./Usuario";

export class Mercancia{
    id:number=0
    nombreMercancia:string="";
    fechaIngreso:Date=new Date()
    cantidad:Number=0
    usuario:Usuario=new Usuario()

}