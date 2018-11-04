import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navbar: NavController, private menuCtrl: MenuController){}

  irparacadastro(){
    this.navbar.navigateForward('/cadastro');
  }

}
