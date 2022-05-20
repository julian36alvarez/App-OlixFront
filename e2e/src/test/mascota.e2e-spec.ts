import { browser, by, element } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { MascotaPage } from '../page/mascota/mascota.po';


describe('workspace-project Mascota', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let mascota: MascotaPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        mascota = new MascotaPage();
    });

    it('Deberia crear mascota', () => {
        const NOMBRE = 'OLIX PRUEBAS';
        const IDCLIENTE = '23';
        const RAZA = 'Schnauzer';

        page.navigateTo();
        navBar.clickBotonMascota();
        mascota.clickBotonCrearMascota();

        mascota.ingresarIdCliente(IDCLIENTE);
        mascota.ingresarNombre(NOMBRE);
        mascota.ingresarRaza(RAZA);
        mascota.seleccionarEspecie();

        browser.executeScript('window.scrollTo(0, document.body.scrollHeight);').then(function () {
          browser.sleep(2500);
          browser.actions().mouseMove(element(by.id('crearMascota'))).click().perform()
          expect(element(by.className('alert-success')).getText()).toEqual('!Registrado con Exito!');
      })



    });


    it('Deberia listar mascotas', () => {
        page.navigateTo();
        navBar.clickBotonMascota();
        mascota.clickBotonListarMascota();
        expect(1).toBeGreaterThanOrEqual(mascota.contarMascotas());
    });

    it('Deberia eliminar el mascota ', () => {
      page.navigateTo();
      navBar.clickBotonMascota();
      mascota.clickBotonBorrarMascota();
      console.log(mascota.contarMascotas());
      var idmascota  = Math.floor(Math.random()*(300-50+1)+50);
      var idEliminar = 'eliminar_'+idmascota;
      browser.executeScript('window.scrollTo(0, document.body.scrollHeight);').then(function () {
        browser.sleep(2500);
        browser.actions().mouseMove(element(by.id(idEliminar))).click().perform();
    })
      expect(1).toBeGreaterThanOrEqual(mascota.contarMascotas());
  });
});
