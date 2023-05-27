import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/Services/Data.service';

@Component({
  selector: 'app-descrpcion',
  templateUrl: './descrpcion.component.html',
  styleUrls: ['./descrpcion.component.sass']
})
export class DescrpcionComponent implements OnInit{
  
  id: any;
  item1: string = '';
  constructor(private dataService: DataService, private router: Router, private paramRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.paramRoute.snapshot.paramMap.get('id');
  }

  Registro(){
    console.log('id: '+this.id+' Item: '+this.item1)
    this.router.navigate(['/PlaneamientoProblema', this.id, this.item1])
  }
}
