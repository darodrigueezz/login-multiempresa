import { Component, OnInit } from '@angular/core';
import { Empresa } from '../models/empresa';
import { EmpresaService } from '../service/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  empresas: Empresa [];


  constructor(
    private empresaService: EmpresaService
  ) { }
  

  ngOnInit() {
 
    this.cargarEmpresas();
      
    }

    cargarEmpresas(): void {
      this.empresaService.lista().subscribe(
        data => {
          console.log(data);
          this.empresas = data;
        
        },
        err => {
          console.log(err);
        }
      );
    }
  

 

}