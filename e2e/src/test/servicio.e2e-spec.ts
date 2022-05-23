import { browser, by, element } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ServicioPage } from '../page/servicio/servicio.po';


describe('workspace-project Servicio', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let servicio: ServicioPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    servicio = new ServicioPage();
  });

  it('Deberia mostrar erro al crear un servicio', () => {
    const IDUSUARIO = '1';
    const IDMASCOTA = '23';
    const FECHA = '22/07/2026';
    const HORA = '10:06';

    page.navigateTo();
    navBar.clickBotonServicio();
    servicio.clickBotonCrearServicio();
    servicio.ingresarIdUsuario(IDUSUARIO);
    servicio.ingresarIdMascota(IDMASCOTA);
    servicio.ingresarHora(HORA);
    servicio.ingresarFecha(FECHA);

    browser.executeScript('window.scrollTo(0, document.body.scrollHeight);').then(() => {
      browser.sleep(2500);
      browser.actions().mouseMove(element(by.id('crearServicio'))).click().perform();
      expect(element(by.className('alert-danger')).getText()).toEqual('Error : Verifique los campos');
    });

  });

});
