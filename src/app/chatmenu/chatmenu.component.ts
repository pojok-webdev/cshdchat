import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-chatmenu',
  templateUrl: './chatmenu.component.html',
  styleUrls: ['./chatmenu.component.scss'],
})
export class ChatmenuComponent implements OnInit {
kdticket
replied_id
  constructor(
    private navParams:NavParams,
    private popoverController: PopoverController  
  ) {
    this.kdticket = this.navParams.get('kdticket')
    this.replied_id = this.navParams.get('replied_id')
    console.log('replied id',this.replied_id)
  }

  ngOnInit() {}
  reply(){
    console.log('Kdticket',this.kdticket)
    this.popoverController.dismiss({kdticket:this.kdticket})
  }
  star(){
    console.log('Kdticket',this.kdticket)
    this.popoverController.dismiss({kdticket:this.kdticket})
  }
}
