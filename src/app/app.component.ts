import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DadoComponent } from "./components/dado/dado.component";
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, DadoComponent, CronometroComponent, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo65';
  name ='Tania';
  edad = 10;
  salario =100
  contador =0
  sueldos = [1700, 500, 950, 450]

  a=0
  b=0
  c=0

  esMayorDeEdad(){
    if(this.edad >= 18){
      return 'Es mayor de edad'
    }
    else{
      return 'Es menor de edad'
    }
  }

  incrementar(){
    this.contador= this.contador + 1
  }

  sumar(){
    this.c= this.a + this.b
  }

  codigo= 0
  descripcion = ''
  precio = 0

  articulos = [
    {codigo: 1, descripcion: "TV", precio: 23},
    {codigo: 2, descripcion: "Microondas", precio: 140},
    {codigo: 3, descripcion: "Licuadora", precio: 40},
  ]

  eliminar(codigo: number): void{
    this.articulos = this.articulos.filter(articulo => articulo.codigo !== codigo);
    //filtes es para crear una nueva lista 
    
  }

  seleccionar(codigo: number): void{
    const articuloSeleccionado = this.articulos.find(articulo => articulo.codigo === codigo);
    // find para buscar el articulo
    if (articuloSeleccionado) {
      this.codigo = articuloSeleccionado.codigo;
      this.descripcion = articuloSeleccionado.descripcion;
      this.precio = articuloSeleccionado.precio;
      
    }
  }

  // guardar (){
  //   const articulo = this.articulos.find(a => a.codigo === this.codigo);
  // articulo ? Object.assign(articulo, { descripcion: this.descripcion, precio: this.precio }) 
  // // assign actualizar los valores
  //          : this.articulos.push({ codigo: this.codigo, descripcion: this.descripcion, precio: this.precio });
  // this.codigo = this.precio = 0;
  // this.descripcion = '';
  // }

  guardarArticulo(articulo: { codigo: number, descripcion: string, precio: number }) {
    const articuloExistente = this.articulos.find(a => a.codigo === articulo.codigo);
    if (articuloExistente) {
      Object.assign(articuloExistente, {
        descripcion: articulo.descripcion,
        precio: articulo.precio
      });
    } else {
      this.articulos.push(articulo);
    }

    this.codigo = 0;
    this.descripcion = '';
    this.precio = 0;
  }


  @ViewChild('dado1') dado1!: DadoComponent
  @ViewChild('dado2') dado2!: DadoComponent
  @ViewChild('dado3') dado3!: DadoComponent

  mensaje: string = '';

  comprobarGanador() {
    const valor1 = this.dado1.valor;
    const valor2 = this.dado2.valor;
    const valor3 = this.dado3.valor;

    if (valor1 === valor2 || valor1 === valor3 || valor2 === valor3) {
      this.mensaje = '¡Felicidades! Has ganado.';
    } else {
      this.mensaje = '';
    }
  }

  lanzar(){
    this.dado1.lanzar()
    this.dado2.lanzar()
    this.dado3.lanzar()
    this.comprobarGanador(); 
  }

  minuto =0 

  actualizar(estado:boolean ){
    if (estado == true){
      this.minuto ++
    }

  }

}
