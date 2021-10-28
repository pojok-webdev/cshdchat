import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chatbykdticket',
  templateUrl: './chatbykdticket.page.html',
  styleUrls: ['./chatbykdticket.page.scss'],
})
export class ChatbykdticketPage implements OnInit {
description
kdticket
ticket = {
  id:0,kdticket:'',clientname:'',ticketstart:'',create_date:''
}
  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) {
    this.kdticket = this.activatedRoute.snapshot.paramMap.get('kdticket')
    this.data.getTicketByKdticket({kdticket:this.kdticket},ticket=>{
      console.log('ticket',ticket[0])
      this.ticket = ticket[0]
    })
  }

  ngOnInit() {
  }
  changeText($event){
    console.log("change of text",$event.detail.value)
    this.description = $event.detail.value
  }
  insertChat(){
    console.log('insert',this.description)
    this.data.insertChat({
      description:this.description,
      createuser:'test',
      kdticket:this.kdticket
    },res=>{
      console.log('chat saved',res)
    })
  }
}
