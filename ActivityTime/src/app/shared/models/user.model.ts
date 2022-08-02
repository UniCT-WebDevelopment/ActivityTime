import { Activities } from "./activities.model";
import { InProgressNotificationsModel, NewNotificationsModel } from "./notifications.model";
import { UserFriend } from "./user-friend.model";

export class User{
    name : String;
    surname : String
    email : String
    password : String
    url_photo : String
    activities : Activities[]
    activitiesFounder : Activities[]
    friends: UserFriend[]
    newNotifications : NewNotificationsModel[]
    inProgressNotifications : InProgressNotificationsModel[]

    constructor(name:String,surname:String,email:String,password:String,url_photo:String,activities:Activities[],activitiesFounder:Activities[],friends:UserFriend[],newNotifications:NewNotificationsModel[],inProgressNotifications:InProgressNotificationsModel[]){
        this.name = name
        this.surname = surname
        this.email = email
        this.password = password
        this.url_photo = url_photo
        this.activities = activities
        this.friends = friends
        this.newNotifications = newNotifications
        this.inProgressNotifications = inProgressNotifications
        this.activitiesFounder = activitiesFounder
    }

    
    
}