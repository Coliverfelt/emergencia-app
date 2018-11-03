import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-situacao',
  templateUrl: './situacao.page.html',
  styleUrls: ['./situacao.page.scss'],
})
export class SituacaoPage {

  constructor(private navbar: NavController) { }

  encaminhamed(){
    this.navbar.navigateForward('/encaminhamed');
  }
  listaped(){
    this.navbar.navigateBack('/lista');
  }
}
