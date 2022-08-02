export class NewNotificationsModel{
    ID : Number;
    type : String;
    cod_sender : String;
    name_sender : String;
    surname_sender : String;
    cod_activity : Number;
    status_notification : Number;
    

    constructor(ID:Number,type:String,cod_sender:String,name_sender:String,surname_sender:String,cod_activity:Number,status_notification:Number){
        this.ID = ID
        this.type = type
        this.cod_sender = cod_sender
        this.cod_activity = cod_activity
        this.status_notification = status_notification
        this.name_sender = name_sender
        this.surname_sender = surname_sender

    }
    
}

export class InProgressNotificationsModel{
    ID : Number;
    type : String;
    email_recipient : String;
    name_recipient : String;
    surname_recipient : String;
    cod_activity : Number;
    status_notification : Number;
    

    constructor(ID:Number,type:String,email_recipient : String, name_recipient : String,surname_recipient : String,cod_activity:Number,status_notification:Number){
        this.ID = ID
        this.type = type
        this.email_recipient= email_recipient
        this.name_recipient= name_recipient
        this.surname_recipient= surname_recipient
        this.cod_activity = cod_activity
        this.status_notification = status_notification

    }
    
}