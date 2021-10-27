import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private route:Router,
    private menuController:MenuController
  ) {}
  gotopage(page){
    console.log('gotopage '+page)
    this.route.navigate(['/'+page])
    this.menuController.close()
  }

}
