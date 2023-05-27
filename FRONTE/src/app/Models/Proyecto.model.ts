export class Proyecto{
    id?: String;
    Nombre: String;
    Descripcion: String;
    id_Estudiante: String;

    constructor( Nombre: String, Descripcion: String, id_Estudiante: String){
        this.Nombre = Nombre;
        this.Descripcion = Descripcion;
        this.id_Estudiante = id_Estudiante;
    }
}