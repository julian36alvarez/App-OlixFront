import { by, element } from 'protractor';

export class MascotaPage {

    private linkBorrarMascota = element(by.id('linkBorrarMascota'));
    private linkCrearMascota = element(by.id('linkCrearMascota'));
    private linkListarMascota = element(by.id('linkListarMascota'));
    private inputIdCliente = element(by.id('idCliente'));
    private inputNombre = element(by.id('nombre'));
    private selectEspecie = element(by.cssContainingText('option', 'PERRO'));
    private inputRaza = element(by.id('raza'));
    private submitCrearMascota = element(by.id('crearMascota'));
    private listaMascotas = element.all(by.id('tableMascotas'));


    async clickBotonBorrarMascota() {
        await this.linkBorrarMascota.click();
    }

    async clickBotonCrearMascota() {
        await this.linkCrearMascota.click();
    }

    async clickBotonListarMascota() {
      await this.linkListarMascota.click();
    }

    async ingresarIdCliente(idCliente) {
      await this.inputIdCliente.sendKeys(idCliente);
    }

    async ingresarNombre(nombre) {
      await this.inputNombre.sendKeys(nombre);
    }

    async ingresarRaza(raza) {
      await this.inputRaza.sendKeys(raza);
    }

    async seleccionarEspecie() {
      await this.selectEspecie.click();;
    }

    async clickInputCrearMascota() {
        await this.submitCrearMascota.click();
    }

    async mensajeCrearMascota() {
      return element(by.className('alert-success')).getText() as Promise<string>;
    }

    async contarMascotas() {
      return this.listaMascotas.count();
    }

}
