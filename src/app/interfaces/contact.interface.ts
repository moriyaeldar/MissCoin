import { Move } from "./move.interface";
export interface Contact{
    _id : string,
    name : string,
    email:string,
    phone:string,
    coins:number
    moves:Move[]
}


