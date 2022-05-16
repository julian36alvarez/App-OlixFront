export class Servicio {
  id: string;
  tipoUsuario: string;
  tipoServicio: string;
  idMascota: string;
  fechaProgramada: string;


  constructor(
    id: string,
    tipoUsuario: string,
    tipoServicio: string,
    idMascota: string,
    fechaProgramada: string
) {
    this.id = id
    this.tipoUsuario = tipoUsuario
    this.tipoServicio = tipoServicio
    this.idMascota = idMascota
    this.fechaProgramada = fechaProgramada
  }

}
