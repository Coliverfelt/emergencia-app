import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder, FormControl, AbstractFormGroupDirective }  from '@angular/forms';
import { HTTP } from '@ionic-native/http/ngx';
import { Paciente } from '../entidade-front/paciente';
import { PacientesService } from '../pacientes.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit{

  cadastrarForm: FormGroup;
  cadastrar = false;
  
  constructor( private formBuilder: FormBuilder, 
                private navbar: NavController,
                private service: PacientesService ) {
  }

  paciente: Paciente = {
    nome: "Yuri",
    data_nasc: "16/10/1996",
    hospital: "Rios D'or",
    sexo: "M",
    tipo_sanguineo: "O+",
    prioridade: "",
    mensagem: ""
  };

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

    this.service.postPaciente(this.paciente).subscribe(paciente => {
      this.paciente = paciente;
      console.log(paciente);
    });
    this.service.getPaciente();
    this.navbar.navigateForward('/hospital');
  }

  voltarparahome(){
    this.navbar.navigateBack('/home');
  }

}

