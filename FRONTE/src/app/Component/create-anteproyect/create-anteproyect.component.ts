import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/Data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-anteproyect',
  templateUrl: './create-anteproyect.component.html',
  styleUrls: ['./create-anteproyect.component.sass']
})
export class CreateAnteproyectComponent implements OnInit {

  id: any;
  Proyecto = {
    Nombre: '',
    Descripcion: '',
    id_Estudiante: ''
  }

  constructor(private dataService: DataService, private router: Router, private paramRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.paramRoute.snapshot.paramMap.get('userId');
  }

  Registro(){
    this.Proyecto.id_Estudiante = this.id;
    console.log(this.Proyecto);
    this.dataService.saveP(this.Proyecto).subscribe(data=>{
      console.log(data);
    })
    this.router.navigate(['/RegistroItem', this.id])
  }
}
