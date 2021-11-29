package com.example.demo.modelo;

import java.util.Date;

public class Medicamento {
private String codigo;
private String nombre;
private Date fechaVencimiento;

public Medicamento(String codigo,String nombre) {
	this.nombre=nombre;
	this.codigo=codigo;
}

 

public String getCodigo() {
	return codigo;
}



 


public String getNombre() {
	return nombre;
}

public void setNombre(String nombre) {
	this.nombre = nombre;
}

public Date getFechaVencimiento() {
	return fechaVencimiento;
}

public void setFechaVencimiento(Date fechaVencimiento) {
	this.fechaVencimiento = fechaVencimiento;
}

public void detalleMedicamente() {
	System.out.print("Nombre"+this.getNombre()+"FechaVencimiento"+this.getFechaVencimiento()+"Codigo"+this.getCodigo());
}

}
