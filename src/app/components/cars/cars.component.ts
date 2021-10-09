import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private carService: CarService) { }

  cars: Car[];


  sendOrderCarToService(car: Car) {
    this.carService.orderedCarsFromUser(car);
  }

  ngOnInit(): void {
    this.cars = this.carService.loadCars();
  }

}
