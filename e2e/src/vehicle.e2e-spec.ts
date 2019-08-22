import { RegisterPage } from './vehicle.po';

describe('Welcome to parqueadero!', () => {
  let registerPage: RegisterPage;
  const placaCarro = 'YUV449';
  const placaMoto = 'UVZ73F';
  const placaIniciaConACarro = 'AYU479';
  const placaIniciaConAMoto = 'AUY57N';
  const tipoVehiculoCarro = 0;
  const tipoVehiculoMoto = 1;
  const cilindrajeMoto = 300;

  beforeEach(async () => {
    registerPage = new RegisterPage();
    await registerPage.navigateTo();
  });

  it('Registro vehiculo carro', async () => {
    // Arrange
    const expectedMessage = 'Registro de vehiculo exitoso';

    await registerPage.asignarTextoPlaca(placaCarro);
    await registerPage.clickTipoVehiculo();
    await registerPage.asignarTipoVehiculo(tipoVehiculoCarro);
    await registerPage.clickBotonRegistrar();
    await registerPage.esperarQueAparezcaToast();

    // Act
    const toastContent = await registerPage.obtenerTextoDelToast();

    // Assert
    expect(toastContent.trim()).toEqual(expectedMessage);
  });

  it('Registro vehiculo carro ingresado', async () => {
    // Arrange
    const expectedMessage =
      'Ya existe un vehiculo dentro del parqueadero con la placa que desea ingresar';

    await registerPage.asignarTextoPlaca(placaCarro);
    await registerPage.clickTipoVehiculo();
    await registerPage.asignarTipoVehiculo(tipoVehiculoCarro);
    await registerPage.clickBotonRegistrar();
    await registerPage.esperarQueAparezcaToast();

    // Act
    const toastContent = await registerPage.obtenerTextoDelToast();

    // Assert
    expect(toastContent.trim()).toEqual(expectedMessage);
  });

  it('Registro vehiculo moto', async () => {
    // Arrange
    const expectedMessage = 'Registro de vehiculo exitoso';

    await registerPage.asignarTextoPlaca(placaMoto);
    await registerPage.clickTipoVehiculo();
    await registerPage.asignarTipoVehiculo(tipoVehiculoMoto);
    await registerPage.esperarAQueAparezcaCilindraje();
    await registerPage.asignarTextoCilindraje(cilindrajeMoto);
    await registerPage.clickBotonRegistrar();
    await registerPage.esperarQueAparezcaToast();

    // Act
    const toastContent = await registerPage.obtenerTextoDelToast();

    // Assert
    expect(toastContent.trim()).toEqual(expectedMessage);
  });

  it('Registro vehiculo moto ingresado', async () => {
    // Arrange
    const expectedMessage =
      'Ya existe un vehiculo dentro del parqueadero con la placa que desea ingresar';

    await registerPage.asignarTextoPlaca(placaMoto);
    await registerPage.clickTipoVehiculo();
    await registerPage.asignarTipoVehiculo(tipoVehiculoMoto);
    await registerPage.esperarAQueAparezcaCilindraje();
    await registerPage.asignarTextoCilindraje(cilindrajeMoto);
    await registerPage.clickBotonRegistrar();
    await registerPage.esperarQueAparezcaToast();

    // Act
    const toastContent = await registerPage.obtenerTextoDelToast();

    // Assert
    expect(toastContent.trim()).toEqual(expectedMessage);
  });

  it('Retirar vehiculo carro', async () => {
    // Arrange - Act - Assert
    await registerPage.obtenerBotonSacar(placaCarro);
    await registerPage.clickBotonSacar(placaCarro);
    await registerPage.obtenerBotonRegistrarPago(placaCarro);
    await registerPage.clickBtnRegistrarPagoButton(placaCarro);
  });

  it('Retirar vehiculo moto', async () => {
    // Arrange - Act - Assert
    await registerPage.obtenerBotonSacar(placaMoto);
    await registerPage.clickBotonSacar(placaMoto);
    await registerPage.obtenerBotonRegistrarPago(placaMoto);
    await registerPage.clickBtnRegistrarPagoButton(placaMoto);
  });

  it('Restriccion por placa carro', async () => {
    // Arrange
    const expectedMessage =
      'Los vehiculos que inician con la letra A en su placa, solo ingresan los dias domingos y lunes';

    await registerPage.asignarTextoPlaca(placaIniciaConACarro);
    await registerPage.clickTipoVehiculo();
    await registerPage.asignarTipoVehiculo(tipoVehiculoCarro);
    await registerPage.clickBotonRegistrar();
    await registerPage.esperarQueAparezcaToast();

    // Act
    const toastContent = await registerPage.obtenerTextoDelToast();

    // Assert
    expect(toastContent.trim()).toEqual(expectedMessage);
  });

  it('Restriccion por placa moto', async () => {
    // Arrange
    const expectedMessage =
      'Los vehiculos que inician con la letra A en su placa, solo ingresan los dias domingos y lunes';

    await registerPage.asignarTextoPlaca(placaIniciaConAMoto);
    await registerPage.clickTipoVehiculo();
    await registerPage.asignarTipoVehiculo(tipoVehiculoMoto);
    await registerPage.esperarAQueAparezcaCilindraje();
    await registerPage.asignarTextoCilindraje(cilindrajeMoto);
    await registerPage.clickBotonRegistrar();
    await registerPage.esperarQueAparezcaToast();

    // Act
    const toastContent = await registerPage.obtenerTextoDelToast();

    // Assert
    expect(toastContent.trim()).toEqual(expectedMessage);
  });

  it('Tipo de vehiculo obligatioro Moto', async () => {
    // Arrange
    const expectedMessage =
      'El tipo de vehiculo no puede estar vacio.';

    await registerPage.asignarTextoPlaca(placaMoto);
    await registerPage.clickBotonRegistrar();
    await registerPage.esperarQueAparezcaToast();

    // Act
    const toastContent = await registerPage.obtenerTextoDelToast();

    // Assert
    expect(toastContent.trim()).toEqual(expectedMessage);
  });

  it('Tipo de vehiculo obligatioro carro', async () => {
    // Arrange
    const expectedMessage =
      'El tipo de vehiculo no puede estar vacio.';

    await registerPage.asignarTextoPlaca(placaCarro);
    await registerPage.clickBotonRegistrar();
    await registerPage.esperarQueAparezcaToast();

    // Act
    const toastContent = await registerPage.obtenerTextoDelToast();

    // Assert
    expect(toastContent.trim()).toEqual(expectedMessage);
  });

  it('Placa obligatoria carro', async () => {
    // Arrange
    const expectedMessage =
      'Es necesario que ingrese la placa del vehiculo';

    await registerPage.asignarTextoPlaca('');
    await registerPage.clickTipoVehiculo();
    await registerPage.asignarTipoVehiculo(tipoVehiculoCarro);
    await registerPage.clickBotonRegistrar();
    await registerPage.esperarQueAparezcaToast();

    // Act
    const toastContent = await registerPage.obtenerTextoDelToast();

    // Assert
    expect(toastContent.trim()).toEqual(expectedMessage);
  });

  it('Placa obligatoria moto', async () => {
    // Arrange
    const expectedMessage =
      'Es necesario que ingrese la placa del vehiculo';

    await registerPage.asignarTextoPlaca('');
    await registerPage.clickTipoVehiculo();
    await registerPage.asignarTipoVehiculo(tipoVehiculoMoto);
    await registerPage.esperarAQueAparezcaCilindraje();
    await registerPage.asignarTextoCilindraje(cilindrajeMoto);
    await registerPage.clickBotonRegistrar();
    await registerPage.esperarQueAparezcaToast();

    // Act
    const toastContent = await registerPage.obtenerTextoDelToast();

    // Assert
    expect(toastContent.trim()).toEqual(expectedMessage);
  });
});
