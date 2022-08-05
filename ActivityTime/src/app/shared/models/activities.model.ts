import { UserFriend, UserPartecipant } from "./user-friend.model";
import { User } from "./user.model";

export class Activities{

    //DB Data
    ID : Number;
    title : String
    description : String
    date : Date
    timeStart : String
    timeEnd : String
    city : String
    address : String
    type : String
    founder : UserFriend

    //Session Data
    participants : UserPartecipant[]

    constructor(ID : Number, title : String, description : String, date : Date, timeStart : String, timeEnd : String, city : String , address : String, founder : UserFriend, partecipants : UserPartecipant[],type : String){
        this.ID = ID
        this.title = title
        this. description = description
        this.date = date
        this.timeStart = timeStart.substring(0,5)
        this.timeEnd = timeEnd.substring(0,5)
        this.city = city
        this.address = address
        this.founder = founder
        this.participants = partecipants
        this.type = type
    }
    
}

