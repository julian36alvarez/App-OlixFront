import { by, element } from 'protractor';

export class ServicioPage {

  private linkBorrarServicio = element(by.id('linkBorrarServicio'));
  private linkCrearServicio = element(by.id('linkCrearServicio'));
  private linkListarServicio = element(by.id('linkListarServicio'));
  private inputIdUsuario = element(by.id('idUsuario'));
  private inputIdMascota = element(by.id('idMascota'));
  private selectTipoUsuario = element(by.cssContainingText('option', '1'));
  private selectTipoServicio = element(by.cssContainingText('option', '1'));
  private inputFechaProgramada = element(by.id('fechaProgramada'));
  private inputHora = element(by.id('horaProgramada'));
  private submitCrearServicio = element(by.id('crearServicio'));
  private listaServicios = element.all(by.id('tableServicios'));


  async clickBotonBorrarServicio() {
    await this.linkBorrarServicio.click();
  }

  async clickBotonCrearServicio() {
    await this.linkCrearServicio.click();
  }

  async clickBotonListarServicio() {
    await this.linkListarServicio.click();
  }

  async ingresarIdUsuario(idUsuario) {
    await this.inputIdUsuario.sendKeys(idUsuario);
  }

  async ingresarIdMascota(idMascota) {
    await this.inputIdMascota.sendKeys(idMascota);
  }

  async seleccionarTipoUsuario() {
    await this.selectTipoUsuario.click();
  }

  async seleccionarTipoServicio() {
    await this.selectTipoServicio.click();
  }

  async ingresarFecha(fecha) {
    await this.inputFechaProgramada.sendKeys(fecha);
  }

  async ingresarHora(hora) {
    await this.inputHora.sendKeys(hora);
  }

  async clickInputCrearServicio() {
    await this.submitCrearServicio.click();
  }

  async mensajeCrearServicio() {
    return element(by.className('alert-success')).getText() as Promise<string>;
  }

  async contarServicios() {
    return this.listaServicios.count();
  }

}
