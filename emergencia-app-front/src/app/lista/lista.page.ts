import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage {

  constructor(private navbar: NavController) { }

  encaminhamed(){
    this.navbar.navigateForward('/diagnostico');
  }

  voltarparahome(){
    this.navbar.navigateBack('/home');
  }

}
