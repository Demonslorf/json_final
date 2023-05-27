export class Correcion{
    id?: String;
    Item: String;
    Contenido: String;
    Fecha: String;
    id_Estudiante: String;

    constructor( Item: String, Contenido: String, Fecha: String, id_Estudiante: String){
        this.Item = Item;
        this.Contenido = Contenido;
        this.Fecha = Fecha;
        this.id_Estudiante = id_Estudiante;
    }
}