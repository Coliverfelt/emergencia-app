import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder, FormControl, AbstractFormGroupDirective }  from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit{

  cadastrarForm: FormGroup;
  cadastrar = false;
  
  constructor( private formBuilder: FormBuilder, private navbar: NavController ) {
  }

  ngOnInit() {
    this.cadastrarForm = this.formBuilder.group({
      nome: ['', Validators.required],
      data_nasc: ['', Validators.required],
    });
 }

  onSubmit() {
    console.log(this.cadastrarForm.controls)
    this.cadastrar = true;

    if (this.cadastrarForm.invalid) {
        return;
    }

    this.navbar.navigateForward('/hospital');
  }


}

