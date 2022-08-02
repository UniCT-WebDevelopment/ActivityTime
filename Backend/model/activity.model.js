import { User } from "./user.model";

export class Activities{

    //DB Data
    ID 
    title
    description
    date
    timeStart
    timeEnd 
    city 
    address 
    founder

    //Session Data
    participants 

    constructor(ID , title, description , date, timeStart , timeEnd , city  , address , founder , partecipants ){
        this.ID = ID
        this.title = title
        this. description = description
        this.date = date
        this.timeStart = timeStart
        this.timeEnd = timeEnd
        this.city = city
        this.address = address
        this.founder = founder
        this.participants = partecipants
    }
    
}
