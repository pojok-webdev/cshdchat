import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-fubykdticket',
  templateUrl: './fubykdticket.page.html',
  styleUrls: ['./fubykdticket.page.scss'],
})
export class FubykdticketPage implements OnInit {
kdticket
fus
  constructor(
    private activateRoute:ActivatedRoute,
    private data:DataService) {
    this.kdticket = this.activateRoute.snapshot.paramMap.get('kdticket')
    this.data.getFusByKdticket({kdticket:this.kdticket},res=>{
      this.fus = res
      console.log('Fus by Kdticket',res)
    })
  }

  ngOnInit() {
  }

}
