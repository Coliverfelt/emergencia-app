import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder, FormControl, AbstractFormGroupDirective }  from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  
  constructor( private formBuilder: FormBuilder, private navbar: NavController ) {
  }

  irparahospital(){
    this.navbar.navigateForward('/hospital');
  }

}

