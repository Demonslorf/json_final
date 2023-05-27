import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/Data.service';
import { AnteProyecto } from 'src/app/Models/AnteProyecto.model';
import { Proyecto } from 'src/app/Models/Proyecto.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-anteproyect',
  templateUrl: './show-anteproyect.component.html',
  styleUrls: ['./show-anteproyect.component.sass']
})
export class ShowAnteproyectComponent implements OnInit {
  
  id: any;
  Dato = {
    Nombre: '',
    Descripcion: '',
    id_Estudiante: ''
  };
  DataList: any = [];
  DataList2: any = [];

  constructor( private dataService:DataService, private router: Router, private paramRoute: ActivatedRoute ){}

  ngOnInit(): void {
    this.id = this.paramRoute.snapshot.paramMap.get('id');
    this.MostrarProyecto(); 
    this.Mostrar_AnteProyecto();
  }

  MostrarProyecto(){
    this.dataService.getP().subscribe((dat) =>{
      for(var i=0; i<dat.length; i++){
        if(this.id == dat[i].id_Estudiante){
          this.DataList.Nombre = dat[i].Nombre;
          this.DataList.Descripcion = dat[i].Descripcion;
        }
      }
    }, error=>{
      console.log(error)
    })
  }
  
  Mostrar_AnteProyecto(){
    this.dataService.getAP().subscribe(datos =>{
      for(var i=0; i<datos.length; i++){
        if(this.id == datos[i].id_Estudiante){
          this.DataList2.id = datos[i].id;
          this.DataList2.DescripcionProblem = datos[i].DescripcionProblem;
          this.DataList2.PlanteamientoProblem = datos[i].PlanteamientoProblem;
          this.DataList2.Hipotesis = datos[i].Hipotesis;
          this.DataList2.ObjetivoGeneral = datos[i].ObjetivoGeneral;
          this.DataList2.TituloTentativo = datos[i].TituloTentativo;
          this.DataList2.Justificacion = datos[i].Justificacion;
        }
      }
    }, error=>{
      console.log(error)
    })
  }

  Editar(id: any){
    this.router.navigate(['AnteProyecto/Edit', id]);
  }
}
