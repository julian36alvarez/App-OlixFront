
export class TRM {
  valor: string;
  unidad: string;
  vigenciadesde: string;
  vigenciahasta: string;

  constructor(
    valor: string,
    unidad: string,
    vigenciadesde: string,
    vigenciahasta: string
  ) {
    this.valor = valor;
    this.unidad = unidad;
    this.vigenciadesde = vigenciadesde;
    this.vigenciahasta = vigenciahasta;
  }


}
