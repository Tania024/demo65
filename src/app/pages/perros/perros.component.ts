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

  constructor(private perroFBService: PerrosfbService){ }

  async ngOnInit(): Promise<void> {
    this.perros = await this.perroFBService.getPerros()

  }

  guardar(){
    this.perroFBService.addPerroObj(this.perro)
  }



}
