import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.className('linkHome'));
    linkProducto = element(by.className('Producto_link'));
    linkCliente = element(by.className('Cliente_link'));
    linkMascota = element(by.className('Mascota_link'));
    linkServicio = element(by.className('Servicio_link'));

    async clickBotonProductos() {
        await this.linkProducto.click();
    }

    async clickBotonCliente() {
      await this.linkCliente.click();
    }
    async clickBotonMascota() {
      await this.linkMascota.click();
    }
    async clickBotonServicio() {
      await this.linkServicio.click();
    }


}
