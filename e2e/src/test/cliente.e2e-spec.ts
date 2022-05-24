import { browser, by, element } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ClientePage } from '../page/cliente/cliente.po';


describe('workspace-project Cliente', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let cliente: ClientePage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    cliente = new ClientePage();
  });

  it('Deberia crear cliente', () => {
    const IDENTIFICAION = 1111111111;
    const NOMBRE = 'Cliente de pruebas';
    const DIRECCION = 'Call 10 Simpre viva';
    const TELEFONO = 4654987;

    page.navigateTo();
    navBar.clickBotonCliente();
    cliente.clickBotonCrearCliente();

    cliente.ingresarIdentificacion(IDENTIFICAION);
    cliente.ingresarNombre(NOMBRE);
    cliente.ingresarDireccion(DIRECCION);
    cliente.ingresarTelefono(TELEFONO);

    browser.executeScript('window.scrollTo(0, document.body.scrollHeight);').then(() => {
      browser.sleep(2500);
      browser.actions().mouseMove(element(by.id('crearCliente'))).click().perform();
      expect(element(by.className('alert-success')).getText()).toEqual('!Registrado con Exito!');
    });

  });

  it('Deberia Fallar al crear cliente por duplicidad', () => {
    const IDENTIFICAION = 1111111111;
    const NOMBRE = 'Cliente de pruebas';
    const DIRECCION = 'Call 10 Simpre viva';
    const TELEFONO = 4654987;
    page.navigateTo();
    navBar.clickBotonCliente();
    cliente.clickBotonCrearCliente();

    cliente.ingresarIdentificacion(IDENTIFICAION);
    cliente.ingresarNombre(NOMBRE);
    cliente.ingresarDireccion(DIRECCION);
    cliente.ingresarTelefono(TELEFONO);

    browser.executeScript('window.scrollTo(0, document.body.scrollHeight);').then(() => {
      browser.sleep(2500);
      browser.actions().mouseMove(element(by.id('crearCliente'))).click().perform();
      expect(element(by.className('alert-danger')).getText()).toEqual('ExcepcionDuplicidad : El usuario ya existe en el sistema');
    });

  });

  it('Deberia listar clientes', async () => {
    page.navigateTo();
    navBar.clickBotonCliente();
    await cliente.clickBotonListarCliente();
    expect(1).toBeGreaterThanOrEqual(cliente.contarClientes());
  });

  it('Deberia eliminar el cliente ', () => {
    page.navigateTo();
    navBar.clickBotonCliente();
    cliente.clickBotonBorrarCliente();

    browser.executeScript('window.scrollTo(0, document.body.scrollHeight);').then(() => {
      browser.sleep(2500);
      browser.actions().mouseMove(element(by.id('eliminar_1111111111'))).click().perform();
    });
    expect(1).toBeGreaterThanOrEqual(cliente.contarClientes());
  });
});
