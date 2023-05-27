import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Models/Usuario.model'; 
import { DataService } from 'src/app/Services/Data.service';
import { LogService } from 'src/app/Services/log.service';

@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.component.html',
  styleUrls: ['./logueo.component.sass']
})
export class LogueoComponent {
  
  constructor(private logService: LogService, private router: Router, private dataService: DataService){}

  Usuario = {
    User: '',
    Password: ''
  }

  num: number = 0;
  usu: Usuario[] = [];

  LogIn(){
    if(this.Usuario.User === 'Admon' && this.Usuario.Password === 'admon123'){
      this.router.navigate(['/Admon']);
    }else{
      this.logService.logIn(this.Usuario)
      .subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('token', res.token);
        this.dataService.getID_User(this.Usuario).subscribe(data=>{
          this.dataService.getP().subscribe((dat) =>{
            for(var i=0; i<dat.length; i++){
              if(data.userId == dat[i].id_Estudiante){ 
                 this.num += 1;               
              }
            }
            if(this.num != 1){
              this.router.navigate(['/RegistroAnteProyecto', data.userId]);
            }else{
              this.router.navigate(['/Start', data.userId]);
            }
          }, error=>{
            console.log(error)
          })
        })
      },
      err=>console.log(err)
    )
    }
  }
}
