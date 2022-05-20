import { by, element } from 'protractor';

export class ClientePage {

    private linkBorrarCliente = element(by.id('linkBorrarCliente'));
    private linkCrearCliente = element(by.id('linkCrearCliente'));
    private linkListarCliente = element(by.id('linkListarCliente'));
    private inputIdentificacion = element(by.id('identificacion'));
    private inputNombre = element(by.id('nombre'));
    private inputDireccion = element(by.id('direccion'));
    private inputTelefono = element(by.id('telefono'));
    private submitCrearCliente = element(by.id('crearCliente'));
    private listaClientes = element.all(by.css('table.tbody tr'));




    async clickBotonBorrarCliente() {
        await this.linkBorrarCliente.click();
    }

    async clickBotonCrearCliente() {
        await this.linkCrearCliente.click();
    }

    async clickBotonListarCliente() {
      await this.linkListarCliente.click();
    }

    async ingresarIdentificacion(identificacion) {
      await this.inputIdentificacion.sendKeys(identificacion);
    }

    async ingresarNombre(nombre) {
      await this.inputNombre.sendKeys(nombre);
    }

    async ingresarDireccion(direccion) {
      await this.inputDireccion.sendKeys(direccion);
    }

    async ingresarTelefono(telefono) {
      await this.inputTelefono.sendKeys(telefono);
    }

    async clickInputCrearCliente() {
        await this.submitCrearCliente.click();
    }

    async mensajeCrearCliente() {
      return element(by.className('alert-success')).getText() as Promise<string>;
    }

    async contarClientes() {
      return this.listaClientes.count();
    }

}
