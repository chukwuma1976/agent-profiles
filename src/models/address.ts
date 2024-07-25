import { Coordinate } from "./coordinate";

export interface Address {
    address: string,
    city: string,
    state: string,
    stateCode: string,
    postalCode: string,
    coordinates: Coordinate,
    country: string
}
