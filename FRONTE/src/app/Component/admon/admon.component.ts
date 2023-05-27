import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnteProyecto } from 'src/app/Models/AnteProyecto.model';
import { Correcion } from 'src/app/Models/Correcion.model';
import { DataService } from 'src/app/Services/Data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admon',
  templateUrl: './admon.component.html',
  styleUrls: ['./admon.component.sass']
})
export class AdmonComponent implements OnInit{

  Info: String = '';
  Datos = {
    Item: '',
    Contenido: '',
    Fecha: '',
    id_Estudiante: ''
  }
  Lista: AnteProyecto[] = [];
  constructor(private router: Router, private dataService: DataService){}
  
  ngOnInit(): void {
    this.MonstrarAP();
  }

  Home(){
    this.router.navigate(['/Admon']);
  }

  VGP(){

  }

  VGA(){

  }

  MonstrarAP(){
    this.dataService.getAP().subscribe((data)=>{
      this.Lista = data;
      console.log(data);
    })
  }

  Correction(id: any){
    Swal.fire({
      title: 'Ingrese valor',
      html:
      '<input id="Item" class="swal2-input" placeholder="Item">' +
      '<input id="Contenido" class="swal2-input" placeholder="Contenido">'+
      '<input id="Fecha" type="date" class="swal2-input" placeholder="Fecha">',
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const Item = (document.getElementById('Item') as HTMLInputElement).value;
        const Contenido = (document.getElementById('Contenido') as HTMLInputElement).value;
        const Fecha = (document.getElementById('Fecha') as HTMLInputElement).value;
        const id_Estudiante = id;

        this.Datos.Item = Item;
        this.Datos.Contenido = Contenido;
        this.Datos.Fecha = Fecha;
        this.Datos.id_Estudiante = id_Estudiante;
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        this.dataService.saveC(this.Datos).subscribe((dato)=>{
          console.log(dato);
        }) 
        Swal.fire({
          title: 'Corrección Enviada'
        })
      }
    })
  }
}
