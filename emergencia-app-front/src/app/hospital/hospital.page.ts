import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.page.html',
  styleUrls: ['./hospital.page.scss'],
})
export class HospitalPage {

  sintomas : FormGroup;

  constructor( private formBuilder: FormBuilder, private navbar: NavController ) {
    this.sintomas = this.formBuilder.group({
      sintomas: ['', Validators.required],
    });
  }
  go(){
    this.navbar.navigateForward('/go');
  }
  voltarparahome(){
    this.navbar.navigateBack('/home');
  }
  hospForm(){
    console.log(this.sintomas.value)
  }

}
