export class NewNotificationsModel{
    ID : Number;
    type : String;
    cod_sender : String;
    name_sender : String;
    surname_sender : String;
    cod_activity : Number;
    status_notification : Number;
    activity_title : String;
    date : Date;
    time_start : String;
    time_end : String;
    

    constructor(ID:Number,type:String,cod_sender:String,name_sender:String,surname_sender:String,cod_activity:Number,status_notification:Number,activity_title : String,date:String,time_start:String,time_end:String){
        this.ID = ID
        this.type = type
        this.cod_sender = cod_sender
        this.cod_activity = cod_activity
        this.status_notification = status_notification
        this.name_sender = name_sender
        this.surname_sender = surname_sender
        this.activity_title = activity_title 
        this.date = new Date(date.toString())
        this.time_start = time_start
        this.time_end = time_end

    }
    
}

export class InProgressNotificationsModel{
    ID : Number;
    type : String;
    email_recipient : String;
    name_recipient : String;
    surname_recipient : String;
    cod_activity : Number;
    status_notification : String;
    activity_title : String;
    date : Date;
    time_start : String;
    time_end : String;
    
    

    constructor(ID:Number,type:String,email_recipient : String, name_recipient : String,surname_recipient : String,cod_activity:Number,status_notification:String,activity_title:String,date:String,time_start:String,time_end:String){
        this.ID = ID
        this.type = type
        this.email_recipient= email_recipient
        this.name_recipient= name_recipient
        this.surname_recipient= surname_recipient
        this.cod_activity = cod_activity
        this.status_notification = status_notification
        this.activity_title = activity_title 
        this.date = new Date(date.toString())
        this.time_start = time_start
        this.time_end = time_end
    }
    
}