export class Servicio {
  id: string;
  tipoUsuario: string;
  tipoServicio: string;
  idMascota: string;
  idUsuario: string;
  fechaProgramada: string;
  fechaContable: string;
  fechaEntrega: string;
  total: string;

  constructor(
    id?: string,
    tipoUsuario?: string,
    tipoServicio?: string,
    idMascota?: string,
    fechaProgramada?: string,
    idUsuario?: string,
    fechaContable?: string,
    fechaEntrega?: string,
    total?: string
  ) {

    this.id = id;
    this.tipoUsuario = tipoUsuario;
    this.tipoServicio = tipoServicio;
    this.idMascota = idMascota;
    this.fechaProgramada = fechaProgramada;
    this.idUsuario = idUsuario;
    this.fechaContable = fechaContable;
    this.fechaEntrega = fechaEntrega;
    this.total = total;

  }

}
