import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.page.html',
  styleUrls: ['./daily.page.scss'],
})
export class DailyPage implements OnInit {
tickets
dt
  constructor(
    private data: DataService,
    private route: Router) {
      this.dt = new Date()
      this.data.getTicketByDate({dt:'2021-10-28'},res=>{
        this.tickets = res
      })
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
    this.route.navigate(['/chatbykdticket/'+obj.kdticket])
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
