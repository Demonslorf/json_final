import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/Services/Data.service';

@Component({
  selector: 'app-titulo-tentativo',
  templateUrl: './titulo-tentativo.component.html',
  styleUrls: ['./titulo-tentativo.component.sass']
})
export class TituloTentativoComponent implements OnInit{
  
  id: any;
  item1: any;
  item2: any;
  item3: any;
  item4: any;
  item5: any;
  constructor(private dataService: DataService, private router: Router, private paramRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.paramRoute.snapshot.paramMap.get('id');
    this.item1 = this.paramRoute.snapshot.paramMap.get('item1');
    this.item2 = this.paramRoute.snapshot.paramMap.get('item2');
    this.item3 = this.paramRoute.snapshot.paramMap.get('item3');
    this.item4 = this.paramRoute.snapshot.paramMap.get('item4');
  }

  Registro(){
    this.router.navigate(['/Justificacion', this.id, this.item1, this.item2, this.item3, this.item4, this.item5])
  }
}
