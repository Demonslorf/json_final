import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/Services/Data.service';

@Component({
  selector: 'app-justificacion',
  templateUrl: './justificacion.component.html',
  styleUrls: ['./justificacion.component.sass']
})
export class JustificacionComponent implements OnInit{
  
  id: any;
  item1: any;
  item2: any;
  item3: any;
  item4: any;
  item5: any;
  item6: any;

  AnteProyecto = {
    DescripcionProblem: '',
    Hipotesis: '',
    Justificacion: '',
    ObjetivoGeneral: '',
    PlanteamientoProblem: '',
    TituloTentativo: '',
    id_Estudiante: '',
  }

  constructor(private dataService: DataService, private router: Router, private paramRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.paramRoute.snapshot.paramMap.get('id');
    this.item1 = this.paramRoute.snapshot.paramMap.get('item1');
    this.item2 = this.paramRoute.snapshot.paramMap.get('item2');
    this.item3 = this.paramRoute.snapshot.paramMap.get('item3');
    this.item4 = this.paramRoute.snapshot.paramMap.get('item4');
    this.item5 = this.paramRoute.snapshot.paramMap.get('item5');
  }

  Registro(){
    this.AnteProyecto.DescripcionProblem = this.item1;
    this.AnteProyecto.PlanteamientoProblem = this.item2;
    this.AnteProyecto.Hipotesis = this.item3;
    this.AnteProyecto.ObjetivoGeneral = this.item4;
    this.AnteProyecto.TituloTentativo = this.item5;
    this.AnteProyecto.Justificacion = this.item6;
    this.AnteProyecto.id_Estudiante = this.id;

    this.dataService.saveAP(this.AnteProyecto).subscribe((data)=>{
      console.log(data);
    })

    this.router.navigate(['/Start', this.id])
  }
}
