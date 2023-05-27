export class AnteProyecto{
    id?: String;
    DescripcionProblem: String;
    Hipotesis: String;
    Justificacion: String;
    ObjetivoGeneral: String;
    PlanteamientoProblem: String;
    TituloTentativo: String;
    id_Estudiante: String;

    constructor( DescripcionProblem: String, Hipotesis: String, Justificacion: String, ObjetivoGeneral: String, PlanteamientoProblem: String, TituloTentativo: String, id_Estudiante: String){
        this.DescripcionProblem = DescripcionProblem;
        this.Hipotesis = Hipotesis;
        this.Justificacion = Justificacion;
        this.ObjetivoGeneral = ObjetivoGeneral;
        this.PlanteamientoProblem = PlanteamientoProblem;
        this.TituloTentativo = TituloTentativo;
        this.id_Estudiante = id_Estudiante;
    }
}