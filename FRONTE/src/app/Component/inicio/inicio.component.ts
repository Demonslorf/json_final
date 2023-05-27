import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogService } from 'src/app/Services/log.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {

  id: any;

  constructor(private logService: LogService, private router: Router, private paramRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.paramRoute.snapshot.paramMap.get('id');
  }

  logOut(){
    this.logService.logOut();
  }

  V(){
    this.router.navigate(['/AnteProyecto', this.id]) 
  }

  C(){
    this.router.navigate(['/Correcciones', this.id])
  }

  A(){
    this.router.navigate(['/Start', this.id])
  }
}
