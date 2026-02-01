class WaterSensor {
  public celsius: number = 20; // Implementación expuesta

  public isBoiling(): boolean {
    return this.celsius >= 100;
  }
}

interface temperatureDTO {
  temperature: number;
  signoDeMedicion: string;
}

class WaterSensor2 {
  private temperature: number = 20;
  private signoDeMedicion: string = 'celsious';

  constructor(data: temperatureDTO) {
    this.temperature = data.temperature;

    if (this.signoDeMedicion == 'celsious') {
      this.signoDeMedicion = 'celsious';
    } else {
      this.signoDeMedicion = 'farenheit';
    }
  }

  public isBoiling(): boolean {
    return this.temperatur >= 100;
  }
}
