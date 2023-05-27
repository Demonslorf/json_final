import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnteProyecto } from '../Models/AnteProyecto.model';
import { Usuario } from '../Models/Usuario.model';
import { Proyecto } from '../Models/Proyecto.model';
import { Correcion } from '../Models/Correcion.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:9100/';

  constructor(private http: HttpClient) { }

  getP(): Observable<any>{
    return this.http.get(this.url+'viewProyect');
  }
  getAP(): Observable<any>{
    return this.http.get(this.url+'viewAnteProyect');
  }
  getC(): Observable<any>{
    return this.http.get(this.url+'viewCorrection');
  }

  dropP(id:string): Observable<any>{
    return this.http.delete(this.url+'deleteProyect/'+id)
  }

  dropAP(id:string): Observable<any>{
    return this.http.delete(this.url+'deleteAnteProyect/'+id)
  }

  editAP(ap: AnteProyecto){
    return this.http.put(this.url+'editAnteProyect', ap);
  }

  saveAP(ap: AnteProyecto): Observable<any>{
    return this.http.post(this.url+"createAnteProyect", ap)
  }

  saveP(p: Proyecto): Observable<any>{
    return this.http.post(this.url+"createProyect", p)
  }

  saveC(c: Correcion): Observable<any>{
    return this.http.post(this.url+"createCorrection", c)
  }

  getUsuario(): Observable<any>{
    return this.http.get(this.url+'viewUser');
  }

  getID_User(usu: Usuario): Observable<any>{
    return this.http.post(this.url+'findUser', usu);
  }

  getOneAP(id: string): Observable<any>{
    return this.http.get(this.url+'unAnteProyect/'+id);
  }

  getEspecificC(atributo: string, valor: string): Observable<any>{
    return this.http.get(this.url+'especificC/'+atributo+'/'+valor);
  }
  
}
