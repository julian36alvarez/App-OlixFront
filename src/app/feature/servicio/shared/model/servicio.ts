export class Servicio {
  id: string;
  tipoUsuario: string;
  tipoServicio: string;
  idMascota: string;
  idUsuario: string;
  fechaProgramada: string;

  constructor(
    id?: string,
    tipoUsuario?: string,
    tipoServicio?: string,
    idMascota?: string,
    fechaProgramada?: string,
    idUsuario?: string
) {
   
      this.id = id
      this.tipoUsuario = tipoUsuario
      this.tipoServicio = tipoServicio
      this.idMascota = idMascota
      this.fechaProgramada = fechaProgramada
      this.idUsuario = idUsuario
    
  }

}
