export class Cliente {
    id: string;
    identificacion: string;
    nombre: string;
    direccion: string;
    telefono: string;

  constructor(
    id: string,
    identificacion: string,
    nombre: string,
    direccion: string,
    telefono: string
) {
    this.id = id
    this.identificacion = identificacion
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
  }

}
