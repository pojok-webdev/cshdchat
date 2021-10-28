import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-chatmenu',
  templateUrl: './chatmenu.component.html',
  styleUrls: ['./chatmenu.component.scss'],
})
export class ChatmenuComponent implements OnInit {
kdticket
  constructor(
    private navParams:NavParams,
    private popoverController: PopoverController  
  ) {
    this.kdticket = this.navParams.get('kdticket')
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
