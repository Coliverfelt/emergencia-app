import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  
  cadastro : FormGroup;
 
  constructor( private navbar: NavController, private formBuilder: FormBuilder ) {
    this.cadastro = (this.formBuilder.group({
      nome: ['', Validators.required],
      dn: ['', Validators.required],
      sexo: ['', Validators.required],
      sangue: [''],
      doenca: ['', Validators.required],
      hospital: [''],
      medico: ['']
    }));}

  irparahospital(){
    this.navbar.navigateForward('/hospital');
  }

  nomeForm(){
    console.log(this.cadastro.value);
  }
}

