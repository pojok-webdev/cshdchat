import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Uid } from '@ionic-native/uid/ngx';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.page.html',
  styleUrls: ['./daily.page.scss'],
})
export class DailyPage implements OnInit {
tickets
dt
imei
showInfo = false
showAsk = false
user = {
  id:0,username:'',imei:''
}

  constructor(
    private data: DataService,
    private route: Router,
    private permission: AndroidPermissions,
    private uid: Uid
    ) {
      this.dt = new Date()
      this.data.getTicketByDate({dt:'2021-10-28'},res=>{
        this.tickets = res
      })
      setTimeout(_=>{
        this.getmyImei()
        .then(imei=>{
          this.imei = imei
          this.data.getUserByImei({imei:imei},user=>{
            if(user.length>0){
              this.showInfo = true
              this.user = user[0]
            }else{
              this.showAsk = true
            }
          })
        })
        .catch(err=>{
          console.log('Err get imei',err)
        })
  
      },1000)
      }

      async getmyImei() {
        const { hasPermission } = await this.permission.checkPermission(
          this.permission.PERMISSION.READ_PHONE_STATE
        );
    
        if (!hasPermission) {
          const result = await this.permission.requestPermission(
            this.permission.PERMISSION.READ_PHONE_STATE
          );
    
          if (!result.hasPermission) {
            throw new Error('Permissions required');
          }
    
          // ok, a user gave us permission, we can get him identifiers after restart app
          return;
        }
    
         return this.uid.IMEI
       }
      ngOnInit() {
  }
  gotochat(){
    this.route.navigate(['/chat'])
  }
  gotofu(){
    this.route.navigate(['/fus'])
  }
  gotofubykdticket(obj){
    console.log(obj)
    this.route.navigate(['/fubykdticket/'+obj.kdticket])
  }
  gotochatbykdticket(obj){
    console.log(obj)
    this.route.navigate(['/chatbykdticket/'+obj.kdticket+'/'+this.imei])
  }
  datechange(event){
    console.log('Datechange envent',event.detail)
    let tmp = event.detail.value.toString().split('T')
    console.log('Dt',tmp[0])
    this.data.getTicketByDate({dt:tmp[0]},res=>{
      this.tickets = res
    })
  }
}
