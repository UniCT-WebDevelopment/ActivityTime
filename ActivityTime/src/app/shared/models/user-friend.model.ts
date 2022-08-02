export class UserFriend{
    name : String;
    surname : String
    email : String
    url_photo: String

    constructor(name:String,surname:String,email:String,url_photo: String){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.url_photo = url_photo;
    }
    
}

export class UserPartecipant{
    name : String;
    surname : String
    email : String
    url_photo: String
    status:String

    constructor(name:String,surname:String,email:String,url_photo: String,status:String){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.url_photo = url_photo;
        this.status = status
    }
    
}