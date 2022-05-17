export class Mascota {
  id: string;
  nombre: string;
  especie: string;
  raza: string;
  idCliente: string;

  constructor(
    id?: string,
    nombre?: string,
    especie?: string,
    raza?: string,
    idCliente?: string
) {
    if(id){
      this.id = id
      this.nombre = nombre
      this.especie = especie
      this.raza = raza
      this.idCliente = idCliente
    }
  }


}
