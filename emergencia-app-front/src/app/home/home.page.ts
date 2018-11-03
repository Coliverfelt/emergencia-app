import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navbar: NavController, private menuCtrl: MenuController){

    //this.content = this.navbar.navigateForward('/cadastro');
  }

  irparacadastro(){
    this.navbar.navigateForward('/cadastro');
  }

openMenu() {
  this.menuCtrl.open();
}

closeMenu() {
  this.menuCtrl.close();
}

toggleMenu() {
  this.menuCtrl.toggle();
}

}
