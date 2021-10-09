import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car';
import { CarName } from '../interfaces/car-name';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  orderedCars: Car[] = [];

  constructor() { }

  private cars: Car[] = [
    { id: 1, name: CarName.FORD, model: 'Focus', yearOfProduction: 2015, color: 'blue' },
    { id: 2, name: CarName.TOYOTA, model: 'Yaris', yearOfProduction: 2016, color: 'white' },
    { id: 3, name: CarName.VOLKSWAGEN, model: 'Golf', yearOfProduction: 2017, color: 'black' },
    { id: 4, name: CarName.KIA, model: 'Sportage', yearOfProduction: 2018, color: 'silver' },
    { id: 5, name: CarName.OPEL, model: 'Astra', yearOfProduction: 2019, color: 'red' },
  ];

  loadCars() {
    return this.cars;
  }

  orderedCarsFromUser(car: Car) {
    this.orderedCars.push(car);
  }

}

