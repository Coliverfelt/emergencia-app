import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.page.html',
  styleUrls: ['./diagnostico.page.scss'],
})
export class DiagnosticoPage {

  constructor(private navbar: NavController) { }

  voltarparahome(){
    this.navbar.navigateBack('/home');
  }

}
