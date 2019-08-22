import {
  browser,
  element,
  by,
  ExpectedConditions,
  ProtractorExpectedConditions,
  ElementFinder,
  $
} from 'protractor';

export class RegisterPage {
  until: ProtractorExpectedConditions;

  constructor() {
    this.until = ExpectedConditions;
  }

  // navegando
  navigateTo(url = 'Registrar'): Promise<void> {
    return browser.get(`${browser.baseUrl}${url}`) as Promise<void>;
  }

  // devolver elementos del DOM
  obtenerTipoVehiculo(): ElementFinder {
    return $('#tipoVehiculo');
  }

  // Obtiene placa
  obtenerPlaca(): ElementFinder {
    return $('#placa');
  }

  // Obtiene toast
  obtenerToast(): ElementFinder {
    return element(by.className('toast-message'));
  }

  // Obtiene botón registrar
  obtenerBotonRegistrar(): ElementFinder {
    return $('#registrarBtn');
  }

  // Obtiene botón sacar
  obtenerBotonSacar(placa: string): ElementFinder {
    return $('#btnSacar' + placa );
  }

  // Obtiene botón registrar pago
  obtenerBotonRegistrarPago(placa: string): ElementFinder {
    return $('#btnRegistrarPago' + placa);
  }


  // Obtiene cilindraje
  obtenerCilindraje(): ElementFinder {
    return $('#cilindraje');
  }

  // devolver contenido de elementos del DOM en el toast
  async obtenerTextoDelToast(): Promise<string> {
    return await this.obtenerToast().getText();
  }

  // modificar elementos del DOM para asignar valores a la placa
  async asignarTextoPlaca(text: string): Promise<void> {
    return await this.obtenerPlaca().sendKeys(text);
  }

  // Asigna valores al select de opciones para tipo de vehiculo
  async asignarTipoVehiculo(optionI: number): Promise<void> {
    // Tick to wait until options apear
    await browser.sleep(500);
    // End tick
    const options: ElementFinder[] = await this.obtenerTipoVehiculo().all(
      by.tagName('option')
    );
    options[optionI].click();
  }

  async asignarTextoCilindraje(cilindraje: number): Promise<void> {
    return await this.obtenerCilindraje().sendKeys(cilindraje);
  }

  // click en elementos
  async clickBotonRegistrar(): Promise<void> {
    await this.obtenerBotonRegistrar().click();
  }

  async clickTipoVehiculo(): Promise<void> {
    await this.obtenerTipoVehiculo().click();
  }

  async clickBotonSacar(placa: string): Promise<void> {
    await this.obtenerBotonSacar(placa).click();
  }

  async clickBtnRegistrarPagoButton(placa: string): Promise<void> {
    await this.obtenerBotonRegistrarPago(placa).click();
  }


  // metodos en espera de accion

  async esperarQueAparezcaToast(): Promise<void> {
    return await this.esperarAQueAparezca(this.obtenerToast());
  }

  async esperarAQueAparezcaCilindraje(): Promise<void> {
    return await this.esperarAQueAparezca(this.obtenerCilindraje());
  }

  async esperarAQueAparezca(elemento: ElementFinder): Promise<void> {
    const id = await elemento.getId();
    return await browser.wait(
      this.until.presenceOf(elemento),
      5000,
      `Elemento ${id} taking too long to appear in the DOM`
    );
  }
}
