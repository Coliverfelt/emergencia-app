import { Injectable } from '@angular/core';
import { Paciente } from './entidade-front/paciente';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable()
export class PacientesService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  urlBase = 'http://localhost:3000/paciente/';

  constructor(private http: HTTP, private httpClient: HttpClient) {
  }

  getPaciente() {
    return this.httpClient.get(this.urlBase);
  }

  postPaciente(paciente: Paciente): Observable<Paciente> {
    return this.httpClient.post<Paciente>(this.urlBase + 'inserirPaciente', paciente, this.httpOptions);
  }
}
