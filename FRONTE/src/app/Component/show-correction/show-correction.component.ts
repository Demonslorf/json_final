import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/Data.service';
import { Correcion } from 'src/app/Models/Correcion.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-correction',
  templateUrl: './show-correction.component.html',
  styleUrls: ['./show-correction.component.sass']
})
export class ShowCorrectionComponent implements OnInit{

  id: any;
  atributo: string= '';
  DataList: any = {};
  DataList2: Correcion[] = [];

  constructor(private dataService:DataService, private paramRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.atributo = 'id_Estudiante';
    this.id = this.paramRoute.snapshot.paramMap.get('id');
    this.MostrarCorrecciones();
  }

  MostrarCorrecciones(){
    console.log('Atributo: '+this.atributo);
    console.log('ID: '+this.id);
    console.log();
    this.dataService.getEspecificC(this.atributo, this.id).subscribe((data)=>{
      this.DataList2 = data;
      console.log(data);
    })
  }
}
