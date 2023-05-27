import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LogService } from '../log.service'; 
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private logService: LogService, private router: Router){

  }

  canActivate(): boolean{
    if(this.logService.loggedIn()){
      return true;
    }
    this.router.navigate(['/Login']);
    return false;
  }
}
