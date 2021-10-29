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
imei
ticket = {
  id:0,kdticket:'',clientname:'',ticketstart:'',create_date:'',replied_id:0
}
chats = []
  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private popoverController: PopoverController
  ) {
    this.kdticket = this.activatedRoute.snapshot.paramMap.get('kdticket')
    this.imei = this.activatedRoute.snapshot.paramMap.get('imei')
    this.data.getTicketByKdticket({kdticket:this.kdticket},ticket=>{
      console.log('ticket',ticket[0])
      this.ticket = ticket[0]
    })
    this.data.getChatByKdticket({kdticket:this.kdticket},chats=>{
      console.log('chats',chats)
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
      description:JSON.stringify(this.description),
      username:this.imei,
      kdticket:this.kdticket
    },res=>{
      console.log('chat saved',res)
      this.data.getChatByKdticket({kdticket:this.kdticket},chats=>{
        this.chats = chats
        this.description = ""
      })  
    })
  }
  async showSubMenu(id){
    console.log('ID',id)
    const popup = await this.popoverController.create({
      component:ChatmenuComponent,
      componentProps:{kdticket:this.kdticket,replied_id:id}
    })
    popup.present()
    popup.onDidDismiss().then(res=>{
      console.log(res.data)
    })
  }
}
