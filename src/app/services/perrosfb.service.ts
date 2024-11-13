import { Injectable } from '@angular/core';
import { addDoc,  collection,  doc, Firestore, getDocs } from '@angular/fire/firestore';
import { Perro } from '../domain/perros';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerrosfbService {

  constructor(private firestore: Firestore) { }

  addPerro(nombre: string, raza:string){
    addDoc(collection(this.firestore, 'perros'), {'nombre':nombre ,'raza': raza })
  }

  addPerroObj(perro: Perro){
    addDoc(collection(this.firestore, 'perros'), Object.assign({},perro))
  }

  async getPerros(){
    const perrosCollection = collection (this.firestore, 'perros')
    const perrosSnapshot = await getDocs(perrosCollection)
    return perrosSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
  }
}
