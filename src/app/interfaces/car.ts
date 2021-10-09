import { CarName } from "./car-name";

export interface Car {
    id: number | string,
    name: CarName,
    model: string,
    yearOfProduction: number | string,
    color: string
}


