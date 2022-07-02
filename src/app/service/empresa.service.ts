import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})

export class EmpresaService {

  empresaURL = 'http://localhost:8080/empresa/';
 

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Empresa[]> {
   return this.httpClient.get<Empresa[]>(this.empresaURL + 'lista');
  }

}
