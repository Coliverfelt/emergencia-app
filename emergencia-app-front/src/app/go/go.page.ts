import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
//import { FormGroup, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-go',
  templateUrl: './go.page.html',
  styleUrls: ['./go.page.scss'],
})
export class GoPage{

  constructor(private navbar: NavController) { }

  lista(){
    this.navbar.navigateForward('/lista');
  }
  voltarparahome(){
    this.navbar.navigateBack('/home');
  }

}
