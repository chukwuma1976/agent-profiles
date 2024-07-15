import { Address } from "./address";
import { BankCard } from "./bankcard";
import { Company } from "./company";
import { Cryptocurrency } from "./cryptocurrency";
import { Hair } from "./hair";

export interface User {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: Hair,
    ip: string,
    address: Address,
    macAddress: string,
    university: string,
    bank: BankCard,
    company: Company,
    ein: string,
    ssn: string,
    userAgent: string,
    crypto: Cryptocurrency, 
    role: string
}
