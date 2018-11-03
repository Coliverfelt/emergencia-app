import { Component } from '@angular/core';
import { NavPush, NavController } from '@ionic/angular';
import { CadastroPage } from '../cadastro/cadastro.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navbar: NavController){}

  irparacadastro(){
    console.log('teste');
    this.navbar.navigateForward('/cadastro');
  }

}
