"use strict";(self.webpackChunkActivityTime=self.webpackChunkActivityTime||[]).push([[449],{7449:(V,p,r)=>{r.r(p),r.d(p,{ActivityZoneModule:()=>M});var u=r(6895),d=r(8869),t=r(4650),f=r(8552),h=r(5020),x=r(4563),g=r(3066),v=r(1773),l=r(4006),m=r(7392);let C=(()=>{class n{constructor(i){this.apiService=i,this.searchResultEmitter=new t.vpe,this.placeholder="Insert Zone"}ngOnInit(){}SearchUser(){let i=document.getElementsByTagName("input")[0].value.toString();var a=[];null!=i&&""!=i?this.apiService.GetActivityForZone(i).subscribe(e=>{if("ERR"!=e.resp&&"EMPTY"!=e.resp){var o=0;if("EMPTY"!=e.resp&&"ERR"!=e.resp)for(;e.resp.activities[o];){let O=e.resp.activities[o].id,T=e.resp.activities[o].title,P=e.resp.activities[o].description,F=new Date(e.resp.activities[o].date),U=e.resp.activities[o].time_start,E=e.resp.activities[o].time_end,L=e.resp.activities[o].city,D=e.resp.activities[o].address,q=e.resp.activities[o].type,I=new g.D(e.resp.activities[o].founder.name,e.resp.activities[o].founder.surname,e.resp.activities[o].founder.email,e.resp.activities[o].founder.url_photo),y=[],c=0;for(;e.resp.activities[o].partecipants[c];)y.push(new g.F(e.resp.activities[o].partecipants[c].name,e.resp.activities[o].partecipants[c].surname,e.resp.activities[o].partecipants[c].email,e.resp.activities[o].partecipants[c].url_photo,e.resp.activities[o].partecipants[c].status)),c+=1;a.push(new x.R(O,T,P,F,U,E,L,D,I,y,q)),o+=1}this.searchResultEmitter.emit(a)}}):this.searchResultEmitter.emit(a)}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(v.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-search-bar-activity-zone"]],outputs:{searchResultEmitter:"searchResultEmitter"},decls:11,vars:1,consts:[["id","TextfieldContainer",1,"valid"],["id","InputField"],["type","text","required",""],[1,"iconsContainer"],[1,"icon",3,"click"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"h2"),t.TgZ(2,"form")(3,"div",1),t._UZ(4,"input",2),t.TgZ(5,"label"),t._uU(6),t.qZA(),t._UZ(7,"span"),t.qZA()(),t.TgZ(8,"div",3)(9,"mat-icon",4),t.NdJ("click",function(){return a.SearchUser()}),t._uU(10,"search"),t.qZA()()()),2&i&&(t.xp6(6),t.Oqu(a.placeholder))},dependencies:[l._Y,l.JL,l.F,m.Hw],styles:['.icon[_ngcontent-%COMP%]{position:absolute;top:40px;right:60px;transform:scale(3);z-index:10}.iconsContainer[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;align-items:left;margin-left:50px;color:#6495ed}.icon[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(3.5);transition:transform .2s ease-in-out}.icon[_ngcontent-%COMP%]:not(:hover){transform:scale(3);transition:transform .2s ease-in-out}.valid[_ngcontent-%COMP%]{position:relative;width:100%;padding:40px;background:white;border:3px solid cornflowerblue;border-radius:100px}#InputField[_ngcontent-%COMP%]{position:relative;height:15px;width:85%}#InputField[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{position:absolute;background:transparent;border:none;box-shadow:none;font-size:20px;color:#6495ed;width:100%}#InputField[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:absolute;top:2px;left:0;color:gray;pointer-events:none;display:block;transition:.5s}#InputField[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], #InputField[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%]{transform:translateY(-30px);font-size:14px;color:#fff;background:cornflowerblue;padding:2px 6px}#InputField[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;bottom:-10px;right:0;display:block;background:grey;width:100%;height:2px}#InputField[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:cornflowerblue;transform:scaleX(0);transform-origin:right;transition:transform .5s ease-in-out}#InputField[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus ~ span[_ngcontent-%COMP%]:before, #InputField[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:valid ~ span[_ngcontent-%COMP%]:before{transform:scaleX(1);transform-origin:left;transition:transform .5s ease-in-out}.invalid[_ngcontent-%COMP%]{position:relative;width:100%;padding:40px;background:white;border:3px solid red;border-radius:100px}*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;outline:none}']}),n})();var _=r(6970);let S=(()=>{class n{constructor(i,a,e){this.dataSessionService=i,this.loadingService=a,this.apiService=e,this.idActivity=0,this.activityTitle="",this.activityCity="",this.activityAddress="",this.activityDate=new Date,this.activityTimeStart="",this.activityTimeEnd="",this.activityFounderName="",this.activityFounderSurname="",this.activityFounderEmail="",this.activityDescription="",this.notificationSendEmitter=new t.vpe}ngOnInit(){}SendRequestForJoin(){let i=new Map;i.set("type","join_request"),i.set("cod_usr",this.activityFounderEmail),i.set("cod_sender",this.dataSessionService.getUser().email),i.set("cod_activity",this.idActivity),i.set("status_notification","N"),i.set("activity_title",this.activityTitle),i.set("date",this.activityDate.getFullYear()+"-"+(this.activityDate.getMonth()+1)+"-"+this.activityDate.getDate()),i.set("time_start",this.activityTimeStart),i.set("time_end",this.activityTimeEnd),this.loadingService.show(),this.apiService.AddNotification(i).subscribe(()=>{this.notificationSendEmitter.emit("join_request"),this.loadingService.hide()})}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(f.C),t.Y36(_.b),t.Y36(v.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-activity-zone-field"]],inputs:{idActivity:"idActivity",activityTitle:"activityTitle",activityCity:"activityCity",activityAddress:"activityAddress",activityDate:"activityDate",activityTimeStart:"activityTimeStart",activityTimeEnd:"activityTimeEnd",activityFounderName:"activityFounderName",activityFounderSurname:"activityFounderSurname",activityFounderEmail:"activityFounderEmail",activityDescription:"activityDescription"},outputs:{notificationSendEmitter:"notificationSendEmitter"},decls:49,vars:12,consts:[[1,"mainContainer"],[1,"row",2,"padding-top","30px"],[1,"data"],[1,"row"],[1,"row",2,"width","82%","padding-bottom","10px"],[1,"joinButtonContainer"],[1,"icon",3,"click"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"b"),t._uU(3,"Title"),t.qZA(),t.TgZ(4,"span",2),t._uU(5),t.qZA()(),t.TgZ(6,"div",3)(7,"b"),t._uU(8,"City"),t.qZA(),t.TgZ(9,"span",2),t._uU(10),t.qZA()(),t.TgZ(11,"div",3)(12,"b"),t._uU(13,"Address"),t.qZA(),t.TgZ(14,"span",2),t._uU(15),t.qZA()(),t.TgZ(16,"div",3)(17,"b"),t._uU(18,"Date"),t.qZA(),t.TgZ(19,"span",2),t._uU(20),t.qZA()(),t.TgZ(21,"div",3)(22,"b"),t._uU(23,"Time"),t.qZA(),t.TgZ(24,"span",2),t._uU(25),t.qZA()(),t.TgZ(26,"div",3)(27,"b"),t._uU(28,"Founder"),t.qZA(),t.TgZ(29,"span",2)(30,"b"),t._uU(31,"Name: "),t.qZA(),t._uU(32),t.qZA(),t.TgZ(33,"span",2)(34,"b"),t._uU(35,"Surname: "),t.qZA(),t._uU(36),t.qZA(),t.TgZ(37,"span",2)(38,"b"),t._uU(39,"Email: "),t.qZA(),t._uU(40),t.qZA()(),t.TgZ(41,"div",4)(42,"b"),t._uU(43,"Description"),t.qZA(),t.TgZ(44,"span",2),t._uU(45),t.qZA()(),t.TgZ(46,"div",5)(47,"mat-icon",6),t.NdJ("click",function(){return a.SendRequestForJoin()}),t._uU(48,"add_circle_outline"),t.qZA()()()),2&i&&(t.xp6(5),t.Oqu(a.activityTitle),t.xp6(5),t.Oqu(a.activityCity),t.xp6(5),t.Oqu(a.activityAddress),t.xp6(5),t.lnq("",a.activityDate.getDate(),"-",a.activityDate.getMonth()+1,"-",a.activityDate.getFullYear(),""),t.xp6(5),t.AsE("",a.activityTimeStart," - ",a.activityTimeEnd,""),t.xp6(7),t.Oqu(a.activityFounderName),t.xp6(4),t.Oqu(a.activityFounderSurname),t.xp6(4),t.Oqu(a.activityFounderEmail),t.xp6(5),t.Oqu(a.activityDescription))},dependencies:[m.Hw],styles:[".mainContainer[_ngcontent-%COMP%]{height:290px;width:250px;background-color:#6495ed;border-radius:50px;display:flex;flex-direction:column;justify-content:flex-start;overflow:scroll}.row[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:65%;word-wrap:break-word;padding-left:30px;font-size:18px;padding-top:15px;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;color:#fff}.data[_ngcontent-%COMP%]{margin-top:6px;font-weight:400;font-size:16px}.mainContainer[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.joinButtonContainer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding-left:200px;position:absolute;padding-top:35px}.icon[_ngcontent-%COMP%]{color:#fff;background-color:transparent;position:relative;transform:scale(1.7);z-index:10}@media only screen and (min-width: 500px){.mainContainer[_ngcontent-%COMP%]{height:420px;width:300px;background-color:#6495ed;border-radius:50px;display:flex;flex-direction:column;justify-content:flex-start;overflow:scroll}.row[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:65%;word-wrap:break-word;padding-left:30px;font-size:18px;padding-top:20px;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;color:#fff}.data[_ngcontent-%COMP%]{margin-top:6px;font-weight:400;font-size:16px}.mainContainer[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.joinButtonContainer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding-left:240px;position:absolute;padding-top:30px}.icon[_ngcontent-%COMP%]{color:#fff;background-color:transparent;position:relative;transform:scale(1.7);z-index:10}.icon[_ngcontent-%COMP%]:hover{cursor:pointer;transform:scale(2);transition:transform .2s ease-in-out}.icon[_ngcontent-%COMP%]:not(:hover){transform:scale(1.7);transition:transform .2s ease-in-out}}"]}),n})();function Z(n,s){if(1&n){const i=t.EpF();t.ynx(0),t.TgZ(1,"app-activity-zone-field",8),t.NdJ("notificationSendEmitter",function(){t.CHM(i);const e=t.oxw();return t.KtG(e.notificationSendTrigger())}),t.qZA(),t.BQk()}if(2&n){const i=s.$implicit;t.xp6(1),t.Q6J("idActivity",i.ID)("activityTitle",i.title)("activityCity",i.city)("activityAddress",i.address)("activityDate",i.date)("activityTimeStart",i.timeStart)("activityTimeEnd",i.timeEnd)("activityFounderName",i.founder.name)("activityFounderSurname",i.founder.surname)("activityFounderEmail",i.founder.email)("activityDescription",i.description)}}const w=[{path:"",component:(()=>{class n{constructor(i,a){this.dataSessionService=i,this.router=a,this.activityZone=[],this.dataSessionService.getUser()?i.DBfetchUserWithoutToken(this.dataSessionService.getUser().email,this.dataSessionService.getUser().password).then(()=>{}):(console.log("user not set"),this.router.navigate(["/login"]))}ngOnInit(){}searchBarResultTrigger(i){this.activityZone=[];var a=!1;for(let e of i){for(let o of this.dataSessionService.getUser().activities.concat(this.dataSessionService.getUser().activitiesFounder))o.ID==e.ID&&(a=!0);for(let o of this.dataSessionService.getUser().inProgressNotifications)o.cod_activity==e.ID&&"N"==o.status_notification&&(a=!0);0==a&&this.activityZone.push(e),a=!1}}notificationSendTrigger(){console.log("\xe8 stata inviata una notifica"),this.dataSessionService.DBfetchUserWithoutToken(this.dataSessionService.getUser().email,this.dataSessionService.getUser().password).then(()=>{this.searchBarResultTrigger(this.activityZone)})}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(f.C),t.Y36(d.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-activity-zone"]],decls:11,vars:1,consts:[["id","Title"],["id","gridContainer"],["id","searchBar"],[3,"searchResultEmitter"],["id","resultSearch"],[2,"padding-bottom","20px","padding-left","20px"],[1,"container"],[4,"ngFor","ngForOf"],[3,"idActivity","activityTitle","activityCity","activityAddress","activityDate","activityTimeStart","activityTimeEnd","activityFounderName","activityFounderSurname","activityFounderEmail","activityDescription","notificationSendEmitter"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0),t._uU(1,"Activity Zone"),t.qZA(),t.TgZ(2,"div",1)(3,"div",2)(4,"app-search-bar-activity-zone",3),t.NdJ("searchResultEmitter",function(o){return a.searchBarResultTrigger(o)}),t.qZA()(),t.TgZ(5,"div",4)(6,"span",5),t._uU(7,"Activity"),t.qZA(),t.TgZ(8,"div",6),t.YNc(9,Z,2,11,"ng-container",7),t.qZA()()(),t._UZ(10,"app-side-menu")),2&i&&(t.xp6(9),t.Q6J("ngForOf",a.activityZone))},dependencies:[u.sg,h.V,C,S],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;width:100%;margin:0}app-activity-zone-field[_ngcontent-%COMP%]{padding:0 10px 10px}#Title[_ngcontent-%COMP%]{position:relative;color:#6495ed;display:flex;width:100%;justify-content:flex-start;padding-bottom:40px;padding-left:70px;font-size:30px;font-weight:700;padding-top:30px;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}#gridContainer[_ngcontent-%COMP%]{display:grid;height:520px;width:100%;grid-template-columns:[c1] 68% [c2] 31%;grid-template-rows:[r1] 25% [r2] 75% [r3] 75%}#searchBar[_ngcontent-%COMP%]{grid-column:c1/span 2;grid-template-rows:r1/span 1;margin-left:2%;margin-right:2%;display:flex;overflow:scroll;flex-wrap:wrap;justify-content:center}#resultSearch[_ngcontent-%COMP%]{border:3px solid cornflowerblue;grid-column:c1/span 2;grid-template-rows:r2/span 2;border-radius:30px;margin-left:2%;margin-right:1%;display:flex;overflow:scroll;flex-wrap:wrap;justify-content:flex-start;box-shadow:inset 0 -3em 3em #0000,0 0 0 2px #fff,.3em .3em 1em #000;color:#6495ed;font-size:22px;font-weight:700;padding-top:20px;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}app-search-bar-activity-zone[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{overflow:scroll;position:relative;color:#6495ed;display:flex;flex-direction:row;width:100%;justify-content:flex-start;padding-bottom:20px;font-size:22px;font-weight:700;padding-top:20px;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}app-friend-field[_ngcontent-%COMP%]{margin-bottom:3px}@media only screen and (min-width: 500px){#Title[_ngcontent-%COMP%]{position:relative;color:#6495ed;display:flex;width:100%;justify-content:flex-start;padding-bottom:40px;padding-left:80px;font-size:40px;font-weight:700;padding-top:30px;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}#gridContainer[_ngcontent-%COMP%]{margin-left:80px;display:grid;height:690px;width:100%;grid-template-columns:[c1] 68% [c2] 25%;grid-template-rows:[r1] 25% [r2] 75%}#searchBar[_ngcontent-%COMP%]{grid-column:c1/span 2;grid-template-rows:r1/span 1;margin-left:2%;margin-right:2%;display:flex;overflow:scroll;flex-wrap:wrap;justify-content:center}#resultSearch[_ngcontent-%COMP%]{border:3px solid cornflowerblue;grid-column:c1/span 2;grid-template-rows:r2/span 2;border-radius:30px;margin-left:0%;margin-right:1%;display:flex;overflow:scroll;flex-wrap:wrap;justify-content:flex-start;box-shadow:inset 0 -3em 3em #0000,0 0 0 2px #fff,.3em .3em 1em #000;color:#6495ed;font-size:22px;font-weight:700;padding-top:20px;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}app-search-bar-activity-zone[_ngcontent-%COMP%]{width:50%}.container[_ngcontent-%COMP%]{overflow:scroll;position:relative;color:#6495ed;display:flex;flex-direction:row;width:100%;justify-content:flex-start;padding-bottom:20px;font-size:22px;font-weight:700;padding-top:20px;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}app-friend-field[_ngcontent-%COMP%]{margin-bottom:3px}}.container[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}#resultSearch[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}"]}),n})()}];let b=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(w),d.Bz]}),n})();var A=r(9360);let M=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,b,A.q]}),n})()}}]);