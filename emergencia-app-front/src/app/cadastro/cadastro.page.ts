import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder, FormControl }  from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {

  cadastro : FormGroup;

  constructor( private formBuilder: FormBuilder, private navbar: NavController ) {
    this.cadastro = this.formBuilder.group({
      nome: ['', Validators.required],
      dn: ['', Validators.required],
      sexo: ['', Validators.required],
      sangue: [''],
      doenca: ['', Validators.required],
      hospital: [''],
      medico: [''],
    });

    this.cadastro = new FormGroup({
      nome: new FormControl()
    });
  }

  irparahospital(){
    this.navbar.navigateForward('/hospital');
  }

  nomeForm(){
    console.log(this.cadastro.value);
  }
}
