import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  constructor(private menuController: MenuController,private router:Router) {
    
  }

  openMenu(){
    this.menuController.enable(true,'first')
    this.menuController.open('first')
  }
  ngOnInit() {}

  gotofu(){
    console.log('gotofu')
    this.router.navigate(['/chat'])
  }
  gotopage(page){
    console.log('gotopage'+page)
    this.router.navigate(['/'+page])
    this.menuController.close()
  }
}
