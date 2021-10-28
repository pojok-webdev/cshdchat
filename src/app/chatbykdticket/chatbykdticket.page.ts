import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { ChatmenuComponent } from '../chatmenu/chatmenu.component';

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
chats = []
  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private popoverController: PopoverController
  ) {
    this.kdticket = this.activatedRoute.snapshot.paramMap.get('kdticket')
    this.data.getTicketByKdticket({kdticket:this.kdticket},ticket=>{
      console.log('ticket',ticket[0])
      this.ticket = ticket[0]
    })
    this.data.getChatByKdticket({kdticket:this.kdticket},chats=>{
      this.chats = chats
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
      username:'test',
      kdticket:this.kdticket
    },res=>{
      console.log('chat saved',res)
      this.data.getChatByKdticket({kdticket:this.kdticket},chats=>{
        this.chats = chats
      })  
    })
  }
  async showSubMenu(){
    const popup = await this.popoverController.create({
      component:ChatmenuComponent,
      componentProps:{kdticket:this.kdticket}
    })
    popup.present()
    popup.onDidDismiss().then(res=>{
      console.log(res.data)
    })
  }
}
