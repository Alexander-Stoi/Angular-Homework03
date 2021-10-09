import { Component, Input, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-ordered-cars',
  templateUrl: './ordered-cars.component.html',
  styleUrls: ['./ordered-cars.component.css']
})
export class OrderedCarsComponent implements OnInit {

  orderedCars: Car[];

  checkForOrderedCars() {
    if (this.orderedCars.length > 0) {
      return false
    }
    return true
  }

  constructor(private orderService: CarService) { }

  ngOnInit(): void {
    this.orderedCars = this.orderService.orderedCars;
  }

}
