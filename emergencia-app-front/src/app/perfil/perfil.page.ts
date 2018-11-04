import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
//import { FormGroup, Validators, FormBuilder, FormControl, AbstractFormGroupDirective }  from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {

  constructor(private navbar: NavController) { }

  voltarparahome(){
    this.navbar.navigateBack('/home');
  }
  hospital(){
    this.navbar.navigateBack('/hospital');
  }
}
