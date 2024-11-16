import { Component, OnInit } from '@angular/core';
import { PerrosfbService } from '../../services/perrosfb.service';
import { Perro } from '../../domain/perros';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perros',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './perros.component.html',
  styleUrl: './perros.component.scss'
})
export class PerrosComponent  implements OnInit{
  perro: Perro = new Perro()
  perros:any
  editandoId: string | null = null;

  constructor(private perroFBService: PerrosfbService){ }

  async ngOnInit(): Promise<void> {
    await this.obtenerPerros();
  }

  async guardar() {
    if (this.editandoId) {
      await this.perroFBService.updatePerro(this.editandoId, this.perro);
      this.editandoId = null;
    } else {
      await this.perroFBService.addPerroObj(this.perro);
    }
    this.perro = new Perro();
    await this.obtenerPerros();
  }

  async borrar(id: string) {
    await this.perroFBService.deletePerro(id);
    await this.obtenerPerros();
  }

  seleccionar(perro: any) {
    this.editandoId = perro.id;
    this.perro = { nombre: perro.nombre, raza: perro.raza };
  }

  private async obtenerPerros() {
    this.perros = await this.perroFBService.getPerros();
  }



}
