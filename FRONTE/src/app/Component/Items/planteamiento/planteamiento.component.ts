import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/Services/Data.service';

@Component({
  selector: 'app-planteamiento',
  templateUrl: './planteamiento.component.html',
  styleUrls: ['./planteamiento.component.sass']
})
export class PlanteamientoComponent implements OnInit{
  
  id: any;
  item1: any;
  item2: any;
  constructor(private dataService: DataService, private router: Router, private paramRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.paramRoute.snapshot.paramMap.get('id');
    this.item1 = this.paramRoute.snapshot.paramMap.get('item1');
  }

  Registro(){
    this.router.navigate(['/Hipotesis', this.id, this.item1, this.item2])
  }
}
