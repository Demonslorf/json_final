import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnteProyecto } from 'src/app/Models/AnteProyecto.model';
import { DataService } from 'src/app/Services/Data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  id: any;
  DataList = {
    DescripcionProblem: '',
    Hipotesis: '',
    Justificacion: '',
    ObjetivoGeneral: '',
    PlanteamientoProblem: '',
    TituloTentativo: '',
    id_Estudiante: ''
  }

  AggDataList = {
    id: '',
    DescripcionProblem: '',
    Hipotesis: '',
    Justificacion: '',
    ObjetivoGeneral: '',
    PlanteamientoProblem: '',
    TituloTentativo: '',
    id_Estudiante: ''
  };

  constructor( private dataService:DataService, private router: Router, private paramRoute: ActivatedRoute ){}

  ngOnInit(): void {
    this.id = this.paramRoute.snapshot.paramMap.get('id');
    this.Mostrar_AnteProyecto(this.id);
  }

  Mostrar_AnteProyecto(id: string){
    this.dataService.getOneAP(id).subscribe((data)=>{
      this.DataList = data;
      console.log(this.DataList);
    })
  }

  Corregir(){
    this.AggDataList.id = this.id;
    this.AggDataList.id_Estudiante = this.DataList.id_Estudiante;

    this.dataService.editAP(this.AggDataList).subscribe((dat)=>{
      console.log(dat);
    })
    this.router.navigate(['Start', this.id]);
  }
}
