import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ChatmenuComponent } from '../chatmenu/chatmenu.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }
  async showSubMenu(){
    console.log("Show Sub Menu")
    let x = await this.popoverController.create({
      component:ChatmenuComponent
    })
    x.present()
  }
}
